<?php
// Dashboard Page
?>
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-3xl font-bold text-darkgray">Dashboard</h1>
            <p class="text-mediumgray">Welcome to the Social Service Management System (PHP Version).</p>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
            <div class="card-header">
                <h2 class="text-xl font-semibold text-darkgray">Total Services</h2>
            </div>
            <div class="card-content">
                <p class="text-4xl font-bold text-primary">5</p> <!-- Placeholder -->
                <p class="text-mediumgray">Currently offered services</p>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="text-xl font-semibold text-darkgray">Active Clients</h2>
            </div>
            <div class="card-content">
                <p class="text-4xl font-bold text-primary">120</p> <!-- Placeholder -->
                <p class="text-mediumgray">Clients actively using services</p>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h2 class="text-xl font-semibold text-darkgray">Upcoming Appointments</h2>
            </div>
            <div class="card-content">
                <p class="text-4xl font-bold text-primary">15</p> <!-- Placeholder -->
                <p class="text-mediumgray">Scheduled for this week</p>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="card-header">
            <h2 class="text-xl font-semibold text-darkgray">Quick Links</h2>
        </div>
        <div class="card-content">
            <div class="flex space-x-4">
                <a href="index.php?page=services" class="btn btn-primary">Manage Services</a>
                <a href="#" class="btn btn-outline">View Clients (Coming Soon)</a>
                <a href="#" class="btn btn-outline">Schedule Appointment (Coming Soon)</a>
            </div>
        </div>
    </div>

</div>