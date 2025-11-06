// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDateTime();
    initializeInteractions();
});

// Handle navigation between different views
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const viewContents = document.querySelectorAll('.view-content');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetView = item.getAttribute('data-view');

            // Remove active class from all nav items and views
            navItems.forEach(nav => nav.classList.remove('active'));
            viewContents.forEach(view => view.classList.remove('active'));

            // Add active class to clicked nav item and corresponding view
            item.classList.add('active');
            document.getElementById(targetView).classList.add('active');
        });
    });
}

// Display current date
function initializeDateTime() {
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const today = new Date();
        dateElement.textContent = today.toLocaleDateString('en-US', options);
    }
}

// Initialize interactive elements
function initializeInteractions() {
    // Email star toggle
    document.querySelectorAll('.email-star').forEach(star => {
        star.addEventListener('click', (e) => {
            e.stopPropagation();
            star.textContent = star.textContent === '⭐' ? '☆' : '⭐';
        });
    });

    // Email item click to show preview
    document.querySelectorAll('.email-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.email-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
            item.classList.remove('unread');
        });
    });

    // Task checkbox toggle
    document.querySelectorAll('.task-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const taskItem = e.target.closest('.task-item');
            if (e.target.checked) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }
        });
    });

    // Calendar day selection
    document.querySelectorAll('.calendar-day').forEach(day => {
        if (!day.classList.contains('other-month')) {
            day.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day').forEach(d => {
                    if (!d.classList.contains('today')) {
                        d.classList.remove('selected');
                    }
                });
                if (!day.classList.contains('today')) {
                    day.classList.add('selected');
                }
            });
        }
    });

    // Quick actions
    const quickActionButtons = document.querySelectorAll('.action-btn');
    quickActionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.textContent.toLowerCase();
            if (action.includes('email')) {
                switchToView('email');
            } else if (action.includes('video')) {
                switchToView('video');
            } else if (action.includes('stream')) {
                switchToView('streaming');
            } else if (action.includes('file')) {
                switchToView('files');
            }
        });
    });

    // Meeting join buttons
    document.querySelectorAll('.btn-join').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Joining meeting... (This is a demo)');
        });
    });

    // Stream items
    document.querySelectorAll('.stream-item').forEach(item => {
        item.addEventListener('click', () => {
            alert('Opening stream... (This is a demo)');
        });
    });

    // File items
    document.querySelectorAll('.file-item').forEach(item => {
        item.addEventListener('click', () => {
            const fileName = item.querySelector('.file-name').textContent;
            alert(`Opening ${fileName}... (This is a demo)`);
        });
    });

    // Large action buttons
    document.querySelectorAll('.btn-large').forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Starting... (This is a demo)');
        });
    });

    // Primary buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.textContent.includes('Compose')) {
                alert('Opening email composer... (This is a demo)');
            } else if (btn.textContent.includes('New Meeting')) {
                alert('Creating new meeting... (This is a demo)');
            } else if (btn.textContent.includes('Go Live')) {
                alert('Starting stream... (This is a demo)');
            } else if (btn.textContent.includes('Add Event')) {
                alert('Adding calendar event... (This is a demo)');
            } else if (btn.textContent.includes('New Task')) {
                alert('Creating new task... (This is a demo)');
            } else if (btn.textContent.includes('Upload')) {
                alert('Opening file upload... (This is a demo)');
            }
        });
    });

    // Calendar navigation
    document.querySelectorAll('.calendar-nav').forEach(btn => {
        btn.addEventListener('click', () => {
            // In a real app, this would change months
            console.log('Calendar navigation clicked');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            console.log('Searching for:', searchTerm);
            // In a real app, this would filter files
        });
    }

    // Sort functionality
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            console.log('Sorting by:', e.target.value);
            // In a real app, this would sort files
        });
    }
}

// Helper function to switch views
function switchToView(viewName) {
    const navItem = document.querySelector(`[data-view="${viewName}"]`);
    if (navItem) {
        navItem.click();
    }
}

// Add some dynamic behavior for demo purposes
setInterval(() => {
    // Update online status indicator (simulated)
    const statusElement = document.querySelector('.profile-status');
    if (statusElement) {
        // Keep it online in this demo
        statusElement.textContent = '● Online';
    }
}, 5000);
