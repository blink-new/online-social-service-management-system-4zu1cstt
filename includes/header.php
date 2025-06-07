<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social Service Management</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    colors: {
                        primary: '#3b82f6', // Blue-500
                        secondary: '#10b981', // Emerald-500
                        lightgray: '#f3f4f6', // Gray-100
                        mediumgray: '#9ca3af', // Gray-400
                        darkgray: '#374151', // Gray-700
                    }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f9fafb; /* Gray-50 */
        }
        .nav-link {
            @apply px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary rounded-md transition-colors;
        }
        .nav-link.active {
            @apply bg-blue-50 text-primary font-semibold;
        }
        .card {
            @apply bg-white shadow-md rounded-lg overflow-hidden;
        }
        .card-header {
            @apply p-4 border-b border-gray-200;
        }
        .card-content {
            @apply p-4;
        }
        .btn {
            @apply px-4 py-2 rounded-md font-medium transition-colors;
        }
        .btn-primary {
            @apply bg-primary text-white hover:bg-blue-600;
        }
        .btn-outline {
            @apply border border-primary text-primary hover:bg-blue-50;
        }
    </style>
</head>
<body class="flex flex-col min-h-screen">
    <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="index.php" class="text-2xl font-bold text-primary">SocialCare PHP</a>
            <nav class="flex space-x-2">
                <a href="index.php?page=dashboard" class="nav-link <?php echo ($page === 'dashboard') ? 'active' : ''; ?>">Dashboard</a>
                <a href="index.php?page=services" class="nav-link <?php echo ($page === 'services') ? 'active' : ''; ?>">Services</a>
                <!-- Add more links as needed -->
            </nav>
        </div>
    </header>
    <main class="flex-grow container mx-auto p-4 md:p-6">
