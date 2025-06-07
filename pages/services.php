<?php
// Services Page
include '../data/sample_data.php'; // $services_data is now available
?>
<div class="space-y-6">
    <div class="flex items-center justify-between">
        <div>
            <h1 class="text-3xl font-bold text-darkgray">Services</h1>
            <p class="text-mediumgray">Manage your social service offerings.</p>
        </div>
        <button class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Service (Coming Soon)
        </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <?php if (!empty($services_data)): ?>
            <?php foreach ($services_data as $service): ?>
                <div class="card">
                    <div class="card-header">
                        <div class="flex justify-between items-start">
                            <h2 class="text-xl font-semibold text-darkgray"><?php echo htmlspecialchars($service['name']); ?></h2>
                            <span class="px-2 py-1 text-xs font-medium rounded-full <?php echo ($service['status'] === 'Active') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'; ?>">
                                <?php echo htmlspecialchars($service['status']); ?>
                            </span>
                        </div>
                        <p class="text-sm text-mediumgray mt-1"><?php echo htmlspecialchars($service['category']); ?></p>
                    </div>
                    <div class="card-content space-y-3">
                        <p class="text-sm text-gray-600"><?php echo htmlspecialchars($service['description']); ?></p>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-500">Duration:</span>
                            <span class="font-medium text-darkgray"><?php echo htmlspecialchars($service['duration']); ?> mins</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-500">Price:</span>
                            <span class="font-medium text-darkgray">$<?php echo number_format($service['price'], 2); ?></span>
                        </div>
                        <div class="pt-3 border-t border-gray-100">
                            <button class="btn btn-outline w-full text-sm">View Details (Coming Soon)</button>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        <?php else: ?>
            <div class="col-span-full card">
                <div class="card-content text-center">
                    <p class="text-mediumgray">No services found. Please add a service.</p>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>