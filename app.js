// Book data
const booksData = [
  // Pre-1875: NO Amazon links, only archive/google/free
  {"period": "17th c.", "author": "Guillaume de l'Hôpital", "title": "Analyse des Infiniment Petits pour l'Intelligence des Lignes Courbes", "year": 1696, "notation": "Leibniz (dy/dx)", "focus": "First printed differential calculus textbook; l'Hôpital's rule", "color": "#FFD700", "archive_url": "https://archive.org/details/analysedesinfini00lhos", "google_books": "", "amazon": "", "significance": "First systematic exposition of differential calculus in print"},
  {"period": "17th c.", "author": "Isaac Newton", "title": "Method of Fluxions and Infinite Series", "year": 1671, "notation": "Newton's fluxions (ẋ)", "focus": "Rate of change, precursor to modern derivatives", "color": "#FFD700", "archive_url": "https://archive.org/details/methodoffluxions00newt", "google_books": "https://books.google.com/books/about/The_Method_of_Fluxions_and_Infinite_Seri.html?id=wzMVAAAAQAAJ", "amazon": "", "significance": "Foundational work developing calculus using fluxions"},
  {"period": "18th c.", "author": "Colin Maclaurin", "title": "A Treatise of Fluxions", "year": 1742, "notation": "Newton's fluxions", "focus": "Rigorous exposition of Newtonian calculus for English students", "color": "#4169E1", "archive_url": "https://archive.org/details/atreatiseonflux01maclgoog", "google_books": "", "amazon": "", "significance": "Systematic defense and exposition of Newton's methods"},
  {"period": "18th c.", "author": "Maria Gaetana Agnesi", "title": "Instituzioni Analitiche ad uso della gioventù italiana", "year": 1748, "notation": "Leibniz (dy/dx, ∫f(x)dx)", "focus": "Systematic teaching of differential & integral calculus", "color": "#4169E1", "archive_url": "https://archive.org/details/bub_gb_xDF_ksE24HUC", "google_books": "https://books.google.com/books/about/Instituzioni_analitiche.html?id=RktbAAAAcAAJ", "amazon": "", "significance": "First comprehensive calculus textbook by a woman; introduced the Witch of Agnesi"},
  {"period": "18th c.", "author": "Leonhard Euler", "title": "Introductio in analysin infinitorum", "year": 1748, "notation": "Leibniz", "focus": "Functions, series, rules of differentiation, integration", "color": "#4169E1", "archive_url": "https://archive.org/details/bub_gb_jQ1bAAAAQAAJ", "google_books": "", "amazon": "", "significance": "Laid foundations of mathematical analysis; introduced function notation f(x)"},
  {"period": "18th c.", "author": "Joseph-Louis Lagrange", "title": "Théorie des fonctions analytiques", "year": 1797, "notation": "Power series (f(x+h) = f(x) + f'(x)h + ...)", "focus": "Eliminated infinitesimals; analytic foundation", "color": "#4169E1", "archive_url": "", "google_books": "", "amazon": "", "significance": "Attempted to free calculus from infinitesimals using power series"},
  {"period": "19th c.", "author": "Sylvestre-François Lacroix", "title": "Traité du calcul différentiel et intégral", "year": 1797, "notation": "Leibniz", "focus": "Comprehensive, encyclopedic calculus text", "color": "#8A2BE2", "archive_url": "", "google_books": "", "amazon": "", "significance": "Most comprehensive calculus text of its era"},
  {"period": "19th c.", "author": "Augustin-Louis Cauchy", "title": "Cours d'Analyse de l'École Royale Polytechnique", "year": 1821, "notation": "Limit-based, rigorous", "focus": "First ε–δ definitions; rigor in derivative & integral", "color": "#8A2BE2", "archive_url": "https://archive.org/details/bub_gb_OlxT3B6EjykC", "google_books": "", "amazon": "", "significance": "Introduced modern rigor with epsilon-delta definitions"},
  {"period": "19th c.", "author": "Karl Weierstrass", "title": "Lecture notes", "year": 1865, "notation": "ε–δ", "focus": "Fully rigorous limits, continuity, derivatives", "color": "#8A2BE2", "archive_url": "", "google_books": "", "amazon": "", "significance": "Perfected rigorous approach to analysis"},
  {"period": "19th c.", "author": "Bernhard Riemann", "title": "Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe", "year": 1854, "notation": "Modern integrals", "focus": "Riemann integral, function representation via series", "color": "#8A2BE2", "archive_url": "", "google_books": "", "amazon": "", "significance": "Introduced Riemann integral, revolutionized function theory"},
  {"period": "19th c.", "author": "Richard Dedekind", "title": "Stetigkeit und irrationale Zahlen", "year": 1872, "notation": "Real numbers construction", "focus": "Dedekind cuts; foundation of real analysis", "color": "#8A2BE2", "archive_url": "", "google_books": "", "amazon": "", "significance": "Rigorous construction of real number system"},

  // Post-1875: WITH Amazon links (modern books, reprints, in-print)
  {"period": "19th c.", "author": "Eduard Goursat", "title": "Cours d'Analyse Mathématique", "year": 1890, "notation": "Modern analysis", "focus": "Limits, continuity, differentiation, integration; rigorous textbook", "color": "#8A2BE2", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Course-Mathematical-Analysis-Functions-Variable/dp/0486446522", "significance": "Standard reference for rigorous analysis"},
  {"period": "20th c.", "author": "G. H. Hardy", "title": "A Course of Pure Mathematics", "year": 1908, "notation": "ε–δ, modern notation", "focus": "Rigorous undergrad calculus, proofs, sequences, series", "color": "#228B22", "archive_url": "https://archive.org/details/coursepuremath00hardrich", "google_books": "", "amazon": "https://www.amazon.com/Course-Pure-Mathematics-Cambridge-Mathematical/dp/0521720559", "significance": "Reformed British mathematics education with rigorous approach"},
  {"period": "20th c.", "author": "E. W. Hobson", "title": "Theory of Functions of a Real Variable", "year": 1907, "notation": "Real analysis", "focus": "Bridge from 19th-century rigor to modern undergraduate analysis", "color": "#228B22", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Theory-Functions-Real-Variable-Hobson/dp/1108005632", "significance": "Important bridge between classical and modern analysis"},
  {"period": "20th c.", "author": "R. Courant", "title": "Differential and Integral Calculus", "year": 1936, "notation": "Leibniz / partial derivatives", "focus": "Applications + rigor; multivariable calculus", "color": "#228B22", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Differential-Integral-Calculus-Vol-Set/dp/047117983X", "significance": "Combined mathematical rigor with practical applications"},
  {"period": "20th c.", "author": "T. M. Apostol", "title": "Calculus Volume 1 & 2", "year": 1967, "notation": "Rigorous + modern", "focus": "Integration first approach, theory + applications", "color": "#228B22", "archive_url": "https://archive.org/details/calculus01apos", "google_books": "", "amazon": "https://www.amazon.com/Calculus-Vol-One-Variable-Introduction-ebook/dp/B00C8PX6WQ", "significance": "Revolutionary integration-first approach to teaching calculus"},
  {"period": "20th c.", "author": "M. Spivak", "title": "Calculus", "year": 1967, "notation": "Proof-oriented", "focus": "Honors calculus, rigorous foundations, exercises in reasoning", "color": "#228B22", "archive_url": "https://archive.org/details/CalculusSpivak", "google_books": "", "amazon": "https://www.amazon.com/Calculus-4th-Michael-Spivak/dp/0914098918", "significance": "Bridge between computational calculus and real analysis"},
  {"period": "20th c.", "author": "W. Rudin", "title": "Principles of Mathematical Analysis", "year": 1953, "notation": "ε–δ, metric spaces", "focus": "Rigorous analysis for math majors; sequences, series, continuity", "color": "#228B22", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Principles-Mathematical-Analysis-Walter-Rudin/dp/007054235X", "significance": "Standard text for rigorous undergraduate analysis"},
  {"period": "21st c.", "author": "James Stewart", "title": "Calculus: Early Transcendentals", "year": 2015, "notation": "Standard modern", "focus": "Applications, multivariable, tech integration, pedagogy", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Calculus-Early-Transcendentals-James-Stewart/dp/1285741552", "significance": "Most widely used calculus textbook worldwide"},
  {"period": "21st c.", "author": "Howard Anton, Irl Bivens, Stephen Davis", "title": "Calculus", "year": 2016, "notation": "Modern notation", "focus": "Problem-solving, visualizations, applied examples", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Calculus-Early-Transcendentals-Howard-Anton/dp/1118883764", "significance": "Emphasis on visualization and technology integration"},
  {"period": "21st c.", "author": "Gilbert Strang", "title": "Calculus", "year": 2016, "notation": "Conceptual, applied", "focus": "Geometric intuition, modeling, engineering applications", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Calculus-Gilbert-Strang/dp/0980232759", "significance": "Open-access approach emphasizing conceptual understanding"},
  {"period": "21st c.", "author": "Marsden & Weinstein", "title": "Calculus I–III", "year": 2005, "notation": "Modern", "focus": "Rigorous but accessible; modeling, multivariable, computational exercises", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Calculus-I-III-Jerrold-Marsden/dp/0387909745", "significance": "Balance between rigor and accessibility"},
  {"period": "21st c.", "author": "Colin Adams & Robert Franzosa", "title": "Calculus: A Complete Course", "year": 2018, "notation": "Modern", "focus": "Theory + problem-solving; technology-based examples", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Calculus-Complete-Course-Robert-Adams/dp/0134154363", "significance": "Comprehensive modern treatment with technology integration"},
  {"period": "21st c.", "author": "Terence Tao", "title": "Analysis I & II", "year": 2011, "notation": "Rigorous", "focus": "Foundations of calculus and analysis for math majors", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Analysis-Third-Texts-Readings-Mathematics/dp/9380250649", "significance": "Modern rigorous treatment building from first principles"},
  {"period": "21st c.", "author": "Matthew Boelkins", "title": "Active Calculus", "year": 2013, "notation": "Interactive", "focus": "Online, Python, modeling, open-access, active learning", "color": "#DC143C", "archive_url": "", "google_books": "", "amazon": "https://www.amazon.com/Active-Calculus-Single-Variable/dp/1724419447", "significance": "Pioneer in open-access, interactive calculus education"}
];


// Global variables
let currentFilter = 'all';
let currentSearch = '';
let activeTimelinePoint = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    renderTimeline();
    renderBooks();
    setupEventListeners();
    showCenturyContext('17th'); // Show initial context
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    // Timeline points will be added dynamically with event listeners
}

function handleFilterClick(e) {
    const period = e.target.dataset.period;
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    currentFilter = period;
    filterAndRenderBooks();
    
    // Show corresponding century context
    if (period !== 'all') {
        const century = period.split(' ')[0];
        showCenturyContext(century);
    } else {
        hideCenturyContexts();
    }
}

function handleSearch(e) {
    currentSearch = e.target.value.toLowerCase();
    filterAndRenderBooks();
}

function filterAndRenderBooks() {
    const filteredBooks = booksData.filter(book => {
        const matchesPeriod = currentFilter === 'all' || book.period === currentFilter;
        const matchesSearch = currentSearch === '' || 
            book.author.toLowerCase().includes(currentSearch) ||
            book.title.toLowerCase().includes(currentSearch);
        
        return matchesPeriod && matchesSearch;
    });
    
    renderBooks(filteredBooks);
}

function renderTimeline() {
    const timelinePoints = document.getElementById('timelinePoints');
    const minYear = 1670;
    const maxYear = 2020;
    const timelineWidth = 100; // percentage
    
    // Sort books by year
    const sortedBooks = [...booksData].sort((a, b) => a.year - b.year);
    
    sortedBooks.forEach((book, index) => {
        const point = document.createElement('div');
        point.className = 'timeline-point';
        point.style.backgroundColor = book.color;
        point.style.left = `${((book.year - minYear) / (maxYear - minYear)) * timelineWidth}%`;
        point.title = `${book.title} (${book.year})`;
        point.dataset.bookIndex = index;
        
        point.addEventListener('click', () => handleTimelinePointClick(book, point));
        point.addEventListener('mouseenter', () => showTimelineTooltip(book, point));
        point.addEventListener('mouseleave', hideTimelineTooltip);
        
        timelinePoints.appendChild(point);
    });
}

function handleTimelinePointClick(book, point) {
    // Remove active state from previous point
    if (activeTimelinePoint) {
        activeTimelinePoint.classList.remove('active');
    }
    
    // Set new active point
    activeTimelinePoint = point;
    point.classList.add('active');
    
    // Scroll to the book card
    const bookCard = document.querySelector(`[data-book-title="${book.title}"]`);
    if (bookCard) {
        bookCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        bookCard.style.transform = 'scale(1.02)';
        setTimeout(() => {
            bookCard.style.transform = '';
        }, 500);
    }
}

function showTimelineTooltip(book, point) {
    // Simple tooltip implementation using title attribute is already handled above
    // Could be enhanced with custom tooltip element if needed
}

function hideTimelineTooltip() {
    // Tooltip hiding handled by removing title focus
}

function renderBooks(books = booksData) {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = `book-card period-${book.period.replace(' c.', '')}`;
    card.dataset.bookTitle = book.title;
    
    const periodClass = book.period.replace(' c.', '');
    
    // Create links HTML only for non-empty URLs
    let linksHtml = '';
    if (book.archive_url && book.archive_url.trim() !== '') {
        linksHtml += `<a href="${book.archive_url}" target="_blank" rel="noopener noreferrer" class="link-btn link-archive">📚 Read on Archive.org</a>`;
    }
    if (book.google_books && book.google_books.trim() !== '') {
        linksHtml += `<a href="${book.google_books}" target="_blank" rel="noopener noreferrer" class="link-btn link-google">📖 Google Books</a>`;
    }
    if (book.amazon && book.amazon.trim() !== '') {
        linksHtml += `<a href="${book.amazon}" target="_blank" rel="noopener noreferrer" class="link-btn link-amazon">🛒 Buy on Amazon</a>`;
    }
    
    // If no links available, show a message
    if (linksHtml === '') {
        linksHtml = '<span class="no-links-message">📖 Physical copies may be available in libraries</span>';
    }
    
    card.innerHTML = `
        <div class="book-header period-${periodClass}">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="book-year">${book.year}</span>
        </div>
        <div class="book-content">
            <div class="book-details">
                <div class="detail-item">
                    <span class="detail-label">Notation Style:</span>
                    <span class="detail-value">${book.notation}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Focus & Innovation:</span>
                    <span class="detail-value">${book.focus}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Historical Significance:</span>
                    <span class="detail-value">${book.significance}</span>
                </div>
            </div>
            <div class="book-links">
                ${linksHtml}
            </div>
        </div>
    `;
    
    return card;
}

function showCenturyContext(century) {
    hideCenturyContexts();
    const contextElement = document.querySelector(`[data-century="${century}"]`);
    if (contextElement) {
        contextElement.classList.add('active');
    }
}

function hideCenturyContexts() {
    document.querySelectorAll('.century-context').forEach(context => {
        context.classList.remove('active');
    });
}

// Smooth scrolling for internal navigation
function smoothScrollTo(targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Clear search
        const searchInput = document.getElementById('searchInput');
        searchInput.value = '';
        currentSearch = '';
        filterAndRenderBooks();
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe book cards for scroll animations
function observeBookCards() {
    document.querySelectorAll('.book-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call this after rendering books
setTimeout(observeBookCards, 100);

// Handle link clicks explicitly to ensure they work
document.addEventListener('click', function(e) {
    if (e.target.matches('a[target="_blank"]')) {
        // Let the browser handle the link normally
        return true;
    }
});

// Additional debugging for links
document.addEventListener('DOMContentLoaded', function() {
    // Add a small delay to ensure all links are rendered
    setTimeout(() => {
        const allLinks = document.querySelectorAll('a[target="_blank"]');
        console.log(`Found ${allLinks.length} external links`);
        
        allLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                console.log('Link clicked:', this.href);
                // Ensure the link opens in a new tab
                if (this.href && this.href.trim() !== '') {
                    window.open(this.href, '_blank', 'noopener,noreferrer');
                }
            });
        });
    }, 500);
});
