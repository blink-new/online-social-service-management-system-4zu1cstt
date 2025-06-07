<?php
// Simple router
$page = isset($_GET['page']) ? $_GET['page'] : 'dashboard';

// Define available pages
$available_pages = [
    'dashboard',
    'services'
];

// Validate page
if (!in_array($page, $available_pages)) {
    $page = 'dashboard'; // Default to dashboard if page is not valid
}

// Include header
include 'includes/header.php';

// Include page content
$page_path = 'pages/' . $page . '.php';
if (file_exists($page_path)) {
    include $page_path;
} else {
    echo '<div class="container mx-auto p-4"><p class="text-red-500">Error: Page not found.</p></div>';
}

// Include footer
include 'includes/footer.php';
?>