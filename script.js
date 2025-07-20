// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const voiceSearchBtn = document.querySelector('.voice-search-btn');
const sidebarItems = document.querySelectorAll('.sidebar-item');

// Mobile menu toggle
let sidebarOpen = false;

menuBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        sidebarOpen = !sidebarOpen;
        sidebar.classList.toggle('open', sidebarOpen);
    }
});

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        // In a real YouTube clone, this would redirect to search results
        console.log('Searching for:', query);
        alert(`Searching for: ${query}`);
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Searching for:', query);
            alert(`Searching for: ${query}`);
        }
    }
});

// Voice search functionality
voiceSearchBtn.addEventListener('click', () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        
        recognition.onstart = () => {
            voiceSearchBtn.style.backgroundColor = '#ff0000';
            voiceSearchBtn.style.color = 'white';
        };
        
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            searchInput.value = transcript;
            voiceSearchBtn.style.backgroundColor = '';
            voiceSearchBtn.style.color = '';
        };
        
        recognition.onerror = () => {
            voiceSearchBtn.style.backgroundColor = '';
            voiceSearchBtn.style.color = '';
            alert('Voice recognition error. Please try again.');
        };
        
        recognition.onend = () => {
            voiceSearchBtn.style.backgroundColor = '';
            voiceSearchBtn.style.color = '';
        };
        
        recognition.start();
    } else {
        alert('Voice recognition is not supported in your browser.');
    }
});

// Sidebar navigation
sidebarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        sidebarItems.forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        item.classList.add('active');
        
        // In a real YouTube clone, this would navigate to different sections
        const sectionName = item.querySelector('span').textContent;
        console.log('Navigating to:', sectionName);
        
        // Close sidebar on mobile after selection
        if (window.innerWidth <= 768) {
            sidebarOpen = false;
            sidebar.classList.remove('open');
        }
    });
});

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.remove('open');
        sidebarOpen = false;
    }
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebarOpen) {
        if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
            sidebarOpen = false;
            sidebar.classList.remove('open');
        }
    }
});

// Search input focus effects
searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.boxShadow = '0 2px 5px 1px rgba(64,60,67,.16)';
});

searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.boxShadow = '';
});

// Simulate loading effect (optional)
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('YouTube clone loaded successfully!');
});

// Handle sign in button click
const signInBtn = document.querySelector('.sign-in-btn');
signInBtn.addEventListener('click', () => {
    alert('Sign in functionality would be implemented here.');
});

// Handle more options button click
const moreBtn = document.querySelector('.more-btn');
moreBtn.addEventListener('click', () => {
    alert('More options menu would be implemented here.');
});
