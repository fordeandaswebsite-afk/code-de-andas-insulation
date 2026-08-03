// ============================================
// reviews.js - Sistema de Reseñas para De Anda's Insulation
// ============================================

// CONFIGURACIÓN
const JSONBIN_BIN_ID = '6a2b305cf5f4af5e29e29215';
const JSONBIN_API_KEY = '$2a$10$GGCGcMCug/lSKR.V/BeaMu3EX/AIMr.DAXg6cx6qmUaIWVMWYBa2W';

const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;

// Rate limiting configuration
const RATE_LIMIT = {
    maxRequests: 3,
    timeWindow: 60000,
    requests: [],
    isBlocked: false,
    blockDuration: 300000,
    blockTimer: null
};

// Datos por defecto
const DEFAULT_REVIEWS = [
    { id: 1, rating: 5, text: "I would highly recommend De Andas Insulation. From initial meeting through the finished project, Oscar was communicative, thorough and professional.", author: "Jim V.", date: "Mar 2026" },
    { id: 2, rating: 5, text: "Great family business. Rates very reasonable, all work done professionally and as promised.", author: "Bruce C.", date: "Oct 2025" },
    { id: 3, rating: 5, text: "Completed within a week of quote, took less than a day. Will use again for spray foam.", author: "Brandon R.", date: "Sep 2025" },
    { id: 4, rating: 5, text: "Job done in timely manner, good work, kept area clean. Excellent service!", author: "Erv C.", date: "Sep 2025" },
    { id: 5, rating: 5, text: "Oscar was extremely responsive and professional. Honest about materials.", author: "Kevin L.", date: "Aug 2025" },
    { id: 6, rating: 5, text: "Professional, polite, delivered exactly what was promised on time. Great results.", author: "Dane M.", date: "Feb 2025" }
];

// ============================================
// FUNCIONES DE SEGURIDAD
// ============================================

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function sanitizeRating(rating) {
    const num = Number(rating);
    return Number.isInteger(num) && num >= 1 && num <= 5 ? num : 0;
}

function sanitizeText(text) {
    if (!text) return '';
    return text.replace(/[<>]/g, '').trim();
}

// ============================================
// FUNCIONES DE RATE LIMITING
// ============================================

function checkRateLimit() {
    const now = Date.now();
    
    RATE_LIMIT.requests = RATE_LIMIT.requests.filter(
        timestamp => now - timestamp < RATE_LIMIT.timeWindow
    );
    
    if (RATE_LIMIT.isBlocked) {
        const remainingBlock = Math.ceil(
            (RATE_LIMIT.blockTimer - now) / 1000
        );
        if (remainingBlock > 0) {
            return {
                allowed: false,
                message: `Too many requests. Please wait ${remainingBlock} seconds.`
            };
        } else {
            RATE_LIMIT.isBlocked = false;
            RATE_LIMIT.requests = [];
            RATE_LIMIT.blockTimer = null;
        }
    }
    
    if (RATE_LIMIT.requests.length >= RATE_LIMIT.maxRequests) {
        RATE_LIMIT.isBlocked = true;
        RATE_LIMIT.blockTimer = now + RATE_LIMIT.blockDuration;
        
        return {
            allowed: false,
            message: `Too many requests. You have been blocked for 5 minutes.`
        };
    }
    
    RATE_LIMIT.requests.push(now);
    return { allowed: true };
}

function updateRateLimitStatus() {
    const now = Date.now();
    RATE_LIMIT.requests = RATE_LIMIT.requests.filter(
        timestamp => now - timestamp < RATE_LIMIT.timeWindow
    );
    
    const remaining = RATE_LIMIT.maxRequests - RATE_LIMIT.requests.length;
    const statusEl = document.getElementById('rate-limit-status');
    
    if (statusEl) {
        if (RATE_LIMIT.isBlocked) {
            const remainingBlock = Math.ceil(
                (RATE_LIMIT.blockTimer - now) / 1000
            );
            statusEl.textContent = `Blocked: ${remainingBlock}s remaining`;
            statusEl.style.color = 'red';
        } else {
            statusEl.textContent = `Remaining reviews: ${remaining}`;
            statusEl.style.color = remaining > 0 ? 'green' : 'orange';
        }
    }
}

// ============================================
// FUNCIONES PRINCIPALES DE RESEÑAS
// ============================================

function getStars(rating = 0) {
    const cleanRating = sanitizeRating(rating);
    return '*'.repeat(cleanRating) + 'o'.repeat(5 - cleanRating);
}

async function loadReviews() {
    try {
        const response = await fetch(`${JSONBIN_URL}/latest`, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        if (response.ok) {
            const data = await response.json();
            if (data.record && Array.isArray(data.record) && data.record.length > 0) {
                return data.record.map(r => ({
                    id: r.id || Date.now(),
                    rating: sanitizeRating(r.rating),
                    text: sanitizeText(r.text || ''),
                    author: escapeHtml(r.author || 'Customer'),
                    date: escapeHtml(r.date || new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }))
                }));
            }
        }
        await saveReviews(DEFAULT_REVIEWS);
        return DEFAULT_REVIEWS;
    } catch (error) {
        console.error('Error loading reviews:', error);
        return DEFAULT_REVIEWS;
    }
}

async function saveReviews(reviews) {
    try {
        const response = await fetch(JSONBIN_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify(reviews)
        });
        return response.ok;
    } catch (error) {
        console.error('Error saving reviews:', error);
        return false;
    }
}

async function addReview(rating, text, author) {
    const rateCheck = checkRateLimit();
    if (!rateCheck.allowed) {
        throw new Error(rateCheck.message);
    }

    const cleanRating = sanitizeRating(rating);
    const cleanText = sanitizeText(text);
    const cleanAuthor = author ? escapeHtml(author.trim()) : 'Customer';
    
    if (!cleanText || cleanText.length < 5) {
        throw new Error('Review must be at least 5 characters long.');
    }
    
    if (cleanText.length > 1000) {
        throw new Error('Review is too long (max 1000 characters).');
    }

    const reviews = await loadReviews();
    const newId = reviews.length > 0 ? Math.max(...reviews.map(r => r.id)) + 1 : 1;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateStr = `${months[new Date().getMonth()]} ${new Date().getFullYear()}`;
    
    const newReview = {
        id: newId,
        rating: cleanRating,
        text: cleanText,
        author: cleanAuthor,
        date: dateStr
    };
    
    reviews.push(newReview);
    const success = await saveReviews(reviews);
    
    if (!success) {
        throw new Error('Failed to save review. Please try again.');
    }
    
    return newReview;
}

async function renderReviews() {
    const container = document.getElementById('reviewsContainer');
    if (!container) return;
    
    container.innerHTML = '<div class="loading-reviews">Loading reviews...</div>';
    
    try {
        const reviews = await loadReviews();
        
        if (!reviews || reviews.length === 0) {
            container.innerHTML = '<div class="loading-reviews">No reviews yet. Be the first to leave one!</div>';
            updateReviewStats(0, 0);
            return;
        }
        
        let totalStars = 0;
        reviews.forEach(r => totalStars += r.rating);
        const average = reviews.length > 0 ? (totalStars / reviews.length) : 0;
        const roundedAvg = Math.round(average * 10) / 10;
        
        updateReviewStats(reviews.length, roundedAvg);
        
        const sorted = [...reviews].sort((a, b) => b.id - a.id);
        
        container.innerHTML = sorted.map(r => {
            const stars = getStars(r.rating);
            const text = escapeHtml(r.text || '');
            const author = escapeHtml(r.author || 'Customer');
            const date = escapeHtml(r.date || 'Unknown date');
            return `
                <div class="review-card">
                    <div class="review-stars">${stars}</div>
                    <p>"${text}"</p>
                    <small>${author} — ${date}</small>
                </div>
            `;
        }).join('');
        
    } catch (error) {
        container.innerHTML = `<div class="loading-reviews error">Error loading reviews: ${escapeHtml(error.message)}</div>`;
        console.error('Render error:', error);
    }
}

function updateReviewStats(count, average) {
    const avgDisplay = document.getElementById('averageRatingDisplay');
    const countDisplay = document.getElementById('totalReviewsCount');
    const heroRating = document.getElementById('heroRating');
    
    if (avgDisplay) avgDisplay.innerText = average.toFixed(1);
    if (countDisplay) countDisplay.innerText = count;
    if (heroRating) heroRating.innerText = average.toFixed(1);
}

async function sendEmailNotification(review, rating, author) {
    try {
        const formData = new FormData();
        formData.append('_subject', `New Review - ${rating} Stars - De Anda's Insulation`);
        formData.append('Review', review);
        formData.append('Author', author || 'Anonymous');
        formData.append('Rating', rating);
        formData.append('Date', new Date().toLocaleString());
        
        await fetch('https://formsubmit.co/ajax/deandasinsulation@gmail.com', { 
            method: 'POST', 
            body: formData 
        });
    } catch (error) {
        console.error('Email notification error:', error);
    }
}

// ============================================
// INICIALIZACIÓN DEL SISTEMA - EXPUESTA GLOBALMENTE
// ============================================

window.initReviewSystem = async function() {
    try {
        await renderReviews();
        
        const submitBtn = document.getElementById('submit-review');
        if (submitBtn) {
            const newBtn = submitBtn.cloneNode(true);
            submitBtn.parentNode.replaceChild(newBtn, submitBtn);
            
            newBtn.addEventListener('click', async function(e) {
                if (this.disabled) return;
                this.disabled = true;
                
                const rating = document.querySelector('input[name="rating"]:checked')?.value;
                const text = document.getElementById('review-input')?.value.trim();
                const author = document.getElementById('review-name')?.value.trim();
                const msg = document.getElementById('reviewFormMessage');
                
                if (!rating) {
                    msg.textContent = 'Please select a star rating.';
                    this.disabled = false;
                    return;
                }
                if (!text) {
                    msg.textContent = 'Please write your review.';
                    this.disabled = false;
                    return;
                }
                if (text.length < 5) {
                    msg.textContent = 'Review must be at least 5 characters.';
                    this.disabled = false;
                    return;
                }
                
                msg.textContent = 'Saving review...';
                msg.style.color = '#0066cc';
                
                try {
                    await addReview(rating, text, author);
                    
                    msg.textContent = 'Review submitted successfully!';
                    msg.style.color = 'green';
                    
                    document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
                    document.getElementById('review-input').value = '';
                    document.getElementById('review-name').value = '';
                    
                    await renderReviews();
                    await sendEmailNotification(text, rating, author);
                    
                    setTimeout(() => {
                        msg.textContent = '';
                    }, 3000);
                    
                } catch (error) {
                    msg.textContent = error.message || 'Error saving review. Please try again.';
                    msg.style.color = 'red';
                    console.error('Submit error:', error);
                } finally {
                    this.disabled = false;
                }
            });
        }
        
        setInterval(updateRateLimitStatus, 5000);
        console.log('Review system initialized successfully');
        
    } catch (error) {
        console.error('Init error:', error);
    }
};

// Auto-inicialización si el DOM ya está listo
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // Esperar un poco para asegurar que el DOM está listo
    setTimeout(() => {
        if (typeof window.initReviewSystem === 'function') {
            window.initReviewSystem();
        }
    }, 100);
}