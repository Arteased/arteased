<template>
    <div class="mx-auto py-10 space-y-10 text-base w-[280px] md:w-[460px] lg:py-20 lg:space-y-20 lg:text-2xl lg:w-[600px]">
        <h4 class="text-2xl font-bold text-center lg:text-3xl">Artist Information</h4>
        <p class="text-center">To be able to sell your artworks in our platform we need more informations from you.</p>

        <div class="space-y-5 lg:space-y-10">
            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label for="phoneNumber">Phone Number</label>
                <input type="number" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>

            <div class="flex justify-between">
                <p>Sex</p>
                
                <div class="space-x-2 lg:space-x-5">
                    <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                    <label for="">Male</label>

                    <input type="checkbox" class="w-5 h-5 lg:w-8 lg:h-8">
                    <label for="">Female</label>
                </div>
            </div>

            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label for="">Nationalities</label>
                <input type="text" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>

            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label for="">City</label>
                <input type="text" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>

            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label for="">Adress</label>
                <input type="text" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>

            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label for="">Zip Code</label>
                <input type="number" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>
        
            <div class="items-center space-y-2 md:flex md:justify-between md:space-y-0">
                <label>Social Media</label>
                <input type="text" class="border-black border-[1px] h-8 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
            </div>
        </div>

        <div class="space-y-5 text-center">
            <h4 class="font-bold">Upload your Resume</h4>
            <h6>Upload File</h6>
            <input type="text" placeholder="Input link here" class="border-black border-[1px] h-8 pl-2 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
       </div>

        <div class="space-y-5 text-center">
            <h4 class="font-bold">Portfolio</h4>
            <h6>Upload File</h6>
            <input type="text" placeholder="Input link here" class="border-black border-[1px] h-8 pl-2 w-[280px] md:h-10 md:w-[320px] lg:w-[400px]">
        </div>

    </div>
</template>