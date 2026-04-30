const { createClient } = supabase;

const supabaseClient = createClient(
  'https://lwgelclnublxukdvzifh.supabase.co', // WITHOUT /rest/v1/
  'sb_publishable_4MbVLsBFoF2QeApJ0I1Ttg_UHeLS_PC'
);

const reviewsContainer = document.getElementById('server-reviews');
const reviewInput = document.getElementById('review-input');
const submitReviewButton = document.getElementById('submit-review');

let reviewsCache = [];

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function getStars(rating = 0) {
    rating = Math.max(0, Math.min(5, rating));
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}

function renderReviews() {
    if (!reviewsContainer) return;

    const total = reviewsCache.reduce((sum, r) => sum + r.rating, 0);
    const avg = reviewsCache.length ? total / reviewsCache.length : 0;

    reviewsContainer.innerHTML = `
        <p>Average rating: ${getStars(Math.round(avg))} (${avg.toFixed(1)}/5)</p>
        ${
            reviewsCache.length === 0
                ? '<p>No reviews yet. Be the first to leave a review!</p>'
                : reviewsCache.map(r => `
                    <div class="review-card">
                        <div class="review-stars">${getStars(r.rating)}</div>
                        <p>${escapeHtml(r.text)}</p>
                        <small>${new Date(r.created_at).toLocaleString()}</small>
                    </div>
                `).join('')
        }
    `;
}

// 🔹 Only 1 initial request
async function fetchReviews() {
    try {
        const { data, error } = await supabaseClient
            .from('reviews')
            .select('text, rating, created_at')
            .order('created_at', { ascending: false });

        if (error) throw error;

        reviewsCache = data || [];
        renderReviews();

    } catch (err) {
        reviewsContainer.innerHTML = `<p>Error: ${escapeHtml(err.message)}</p>`;
    }
}

// 🔹 Only 1 submission request
async function submitReview() {
    const text = reviewInput?.value.trim();
    const ratingEl = document.querySelector('input[name="rating"]:checked');

    if (!text) return alert('Write a review.');
    if (!ratingEl) return alert('Select a rating.');

    const rating = Number(ratingEl.value);

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        return alert('Invalid rating.');
    }

    try {
        const now = new Date().toISOString();

        const { error } = await supabaseClient
            .from('reviews')
            .insert([{ text, rating }]);

        if (error) throw error;

        // 🚀 WITHOUT fetching data again
        reviewsCache.unshift({
            text,
            rating,
            created_at: now
        });

        renderReviews();

        reviewInput.value = '';
        document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);

    } catch (err) {
        alert('Error saving: ' + err.message);
        console.error(err);
    }
}

submitReviewButton?.addEventListener('click', submitReview);
fetchReviews();