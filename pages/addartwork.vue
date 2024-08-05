<template>
    <div class="mx-auto py-10 space-y-10 text-base text-center min-w-[280px] lg:py-20 lg:space-y-20 lg:text-2xl">
        <p class="font-bold md:min-w-[400px]">What type of artwork you want to sell ?</p>
        
        <div class="mx-auto flex flex-wrap gap-2 w-[248px] md:w-[376px] lg:gap-5 lg:w-[580px]">
            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Drawings</button>
            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Photography</button>

            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Sculpture</button>
            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Paintings</button>

            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Digital</button>
            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Prints</button>
                    
            <button class="border-black border-[1px] h-10 rounded-lg w-[120px] lg:h-[60px] lg:w-[180px]">Mix Media</button>
            <input type="text" placeholder="Other" class="border-black border-[1px] h-10 pl-2 w-[248px] lg:h-[60px] md:w-[248px] lg:w-[380px]">
        </div>

        <div class="flex flex-col justify-center gap-10">
            <input type="file" accept=".jpg, .jpeg, .svg, .web, .png" class="mx-auto">
            <div class="border-black border-[1px] flex flex-col h-[200px] items-center justify-center mx-auto w-[280px] md:h-[320px] md:w-[480px] lg:h-[360px] lg:w-[520px] xl:h-[400px] xl:w-[600px]">
                <span class="">Add Your Photo</span>
            </div>
            <p>We suggest to take photo from various angle for better display</p>
        </div>
        
        <div class="space-y-10 md:space-y-20">
            <div class="space-y-2">
                <label for="">Title</label>
                <input type="text" class="block border-black border-[1px] h-8 mx-auto w-[280px] md:h-[120px] md:w-[320px] lg:w-[400px] xl:h-[120px] xl:w-[720px]">
            </div>

            <div class="space-y-2">
                <label for="">Description</label>
                <input type="text" class="block border-black border-[1px] h-[120px] mx-auto w-[280px] md:w-[320px] lg:w-[400px]">
            </div>
            
            <div class="space-x-2">
                <label for="">Production Year</label>
                <input type="text" class="block border-black border-[1px] mx-auto w-[160px] md:inline">
            </div>

            <div class="grid space-y-2">
                <p for="">Dimension (Length X Width X Height)</p>
                <div>
                    <input type="number" class="border-black border-[1px] w-[160px]">
                    <label for="">cm</label>
                </div>

                <div>
                    <input type="number" class="border-black border-[1px] w-[160px]">
                    <label for="">cm</label>
                </div>
                
                <div>
                    <input type="number" class="border-black border-[1px] w-[160px]">
                    <label for="">cm</label>
                </div>
            </div>

            <div class="space-y-2">
                <p>Medium (please add all medium you’ve been using on this particular artwork)</p>
                <div>

                </div>
                

                <p>Other (add manually if you don’t find any medium you’ve been used on)</p>
                <input type="text" class="border-black border-[1px]">
            </div>

            <div>
                <p>On (Base medium you used)</p>
                <div>

                </div>

                <p>Other (add manually if you don’t find any medium you’ve been used on)</p>
                <input type="text" class="border-black border-[1px]">
            </div>

            <div>
                <p>Artstyle</p>
                <ul>
                    <li></li>
                </ul>
            </div>

            <div>
                <p>Series (mention name of the series if this artwork included)</p>
                <input type="text" class="border-black border-[1px]">
            </div>

            <div>
                <p>Part (ex: Part 4 from 16 series)</p>
                <input type="text" class="border-black border-[1px]">
            </div>

            <div class="space-y-5">
                <p>Artworks Achievement</p>
                <input type="text" class="border-black border-[1px] h-[120px] w-[280px]">
            </div>

            <div class="flex flex-wrap justify-center md:flex">
                <span>Price</span>
                <input type="number" class="border-black border-[1px] ml-2">
            </div>

            <div>
                <NuxtLink to="/artworkcollection"><button class="bg-mystic rounded-lg h-10 w-[120px] font-bold text-xs md:h-[60px] md:w-[200px] md:text-base text-white">Add Artwork</button></NuxtLink>
            </div>
        </div>
    </div>
</template>