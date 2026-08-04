(function () {
    const splashOverlay = document.getElementById('splashOverlay');
    const mainWebsite = document.getElementById('mainWebsite');
    const progressFill = document.getElementById('progressFill');
    const progressPercent = document.getElementById('progressPercent');
    const progressSection = document.getElementById('progressSection');
    const verifyingSection = document.getElementById('verifyingSection');
    const progressStatus = document.getElementById('progressStatus');
    const verifyingStatus = document.getElementById('verifyingStatus');

    function showMainContent() {
        if (splashOverlay) {
            splashOverlay.style.display = 'none';
        }
        if (mainWebsite) {
            mainWebsite.style.display = 'block';
        }
    }

    function createOpinionPopup() {
        if (!document.querySelector('.opinion-popup')) {
            const popup = document.createElement('div');
            popup.className = 'opinion-popup';
            popup.innerHTML = `
                <div class="opinion-popup-header">
                    <span>💬 Your opinion matters</span>
                    <span class="opinion-popup-close">×</span>
                </div>
                <div class="opinion-popup-content">
                    <p>How was your experience with our website?</p>
                    <div class="opinion-badges">
                        <button class="opinion-badge" data-val="1">😞</button>
                        <button class="opinion-badge" data-val="2">😐</button>
                        <button class="opinion-badge" data-val="3">🙂</button>
                        <button class="opinion-badge" data-val="4">😄</button>
                        <button class="opinion-badge" data-val="5">🤩</button>
                    </div>
                    <textarea class="opinion-comment" placeholder="Leave a quick comment..."></textarea>
                    <button class="btn-primary opinion-submit">Send</button>
                    <p class="popup-message"></p>
                </div>
            `;

            document.body.appendChild(popup);

            let selected = null;
            popup.querySelectorAll('.opinion-badge').forEach((badge) => {
                badge.addEventListener('click', function () {
                    popup.querySelectorAll('.opinion-badge').forEach((item) => item.classList.remove('selected'));
                    this.classList.add('selected');
                    selected = this.getAttribute('data-val');
                });
            });

            popup.querySelector('.opinion-submit').addEventListener('click', async () => {
                if (!selected) {
                    popup.querySelector('.popup-message').textContent = 'Please select a rating.';
                    return;
                }

                const formData = new FormData();
                formData.append('_subject', `Website Opinion: ${selected}`);
                formData.append('Rating', selected);
                formData.append('Comment', popup.querySelector('.opinion-comment').value || '');

                try {
                    await fetch('https://formsubmit.co/ajax/deandastech@gmail.com', {
                        method: 'POST',
                        body: formData
                    });
                    popup.querySelector('.popup-message').textContent = 'Thank you! ❤️';
                    setTimeout(() => popup.remove(), 1500);
                } catch (error) {
                    popup.querySelector('.popup-message').textContent = 'Could not send right now. Please try again later.';
                }
            });

            popup.querySelector('.opinion-popup-close').addEventListener('click', () => popup.remove());

            let drag = false;
            let offX = 0;
            let offY = 0;
            const header = popup.querySelector('.opinion-popup-header');

            header.addEventListener('mousedown', (event) => {
                if (event.target.classList.contains('opinion-popup-close')) return;
                drag = true;
                offX = event.clientX - popup.offsetLeft;
                offY = event.clientY - popup.offsetTop;
                popup.style.cursor = 'grabbing';
            });

            window.addEventListener('mousemove', (event) => {
                if (!drag) return;
                popup.style.left = `${Math.min(window.innerWidth - popup.offsetWidth - 10, Math.max(10, event.clientX - offX))}px`;
                popup.style.top = `${Math.min(window.innerHeight - popup.offsetHeight - 10, Math.max(10, event.clientY - offY))}px`;
            });

            window.addEventListener('mouseup', () => {
                drag = false;
                popup.style.cursor = 'default';
            });
        }
    }

    function startSplashScreen() {
        let progress = 0;
        const interval = window.setInterval(() => {
            progress = Math.min(100, progress + Math.floor(Math.random() * 10) + 5);

            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
            if (progressPercent) {
                progressPercent.textContent = `${progress}%`;
            }

            if (progress >= 100) {
                window.clearInterval(interval);
                if (progressSection) {
                    progressSection.style.display = 'none';
                }
                if (verifyingSection) {
                    verifyingSection.style.display = 'block';
                }
                if (verifyingStatus) {
                    verifyingStatus.textContent = 'Preparing your experience...';
                }

                window.setTimeout(() => {
                    showMainContent();
                    if (typeof window.initReviewSystem === 'function') {
                        window.initReviewSystem();
                    }
                    window.setTimeout(createOpinionPopup, 2000);
                }, 800);
            }
        }, 80);
    }

    function initialize() {
        if (progressSection) {
            progressSection.style.display = 'block';
        }
        if (verifyingSection) {
            verifyingSection.style.display = 'none';
        }
        if (progressStatus) {
            progressStatus.textContent = 'Initializing secure environment...';
        }
        if (splashOverlay && mainWebsite) {
            startSplashScreen();
        } else {
            showMainContent();
            if (typeof window.initReviewSystem === 'function') {
                window.initReviewSystem();
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize, { once: true });
    } else {
        initialize();
    }
})();
