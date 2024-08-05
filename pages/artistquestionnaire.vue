<template>
    <div class="mx-auto py-10 space-y-10 text-base text-justify w-[260px] md:w-[600px] lg:py-20 lg:space-y-20 lg:text-2xl">
        <div class="space-y-10 lg:space-y-20">
            <h4 class="font-bold text-center text-2xl lg:text-3xl">Questionnaire</h4>
            <ol class="list-decimal space-y-10 lg:space-y-20">
                <li>Which medium you usually used?
                    <br>
                    You can choose more than 1 answer
                    <div class="lg:space-y-2">
                        <div class="flex gap-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="" class="w-[88px] lg:w-[113px]">Painting</label>

                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">Drawing</label>
                        </div>

                        <div class="flex gap-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="" class="w-[88px] lg:w-[113px]">Illustration</label>

                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">Sculpture</label>
                        </div>

                        <div class="flex gap-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="" class="w-[88px] lg:w-[113px]">Watercolor</label>
                        
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">Print</label>

                        </div>

                        <div class="flex gap-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="" class="w-[88px] lg:w-[113px]">Mix Media</label>

                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">Photography</label>
                        </div>

                        <div class="space-y-2">
                            <div class="flex gap-2">
                                <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                                <label for="" class="w-[88px] lg:w-[113px]">Ceramic</label>
                            </div>

                            <div>
                                <label for="">Other</label>
                                <input type="text" class="border-black border-[1px] h-8 ml-2 w-[160px] md:w-[200px] lg:h-10 lg:w-[320px]">
                            </div>
                        </div>

                    </div>
                </li>
                

                <li>How many year you've been a professional artist?
                    <div class="block space-x-2">
                        <input type="number" class="border-black border-[1px] h-8 w-[160px] lg:h-10">
                        <label>year</label>
                    </div>
                </li>

                <li>How many artworks you've been sold totally?
                    <div class="block space-x-2">
                        <input type="number" class="border-black border-[1px] h-8 w-[160px] lg:h-10">
                        <label>pieces</label>
                    </div>
                </li>

                <li>How many artworks you usually sold every year?
                    <div class="block space-x-2">
                        <input type="number" class="border-black border-[1px] h-8 w-[160px] lg:h-10">
                        <label for="">pieces</label>
                    </div>
                </li>

                <li>How many artworks you can build in a year?
                    <div class="block space-x-2">
                        <input type="number" class="border-black border-[1px] h-8 w-[160px] lg:h-10">
                        <label for="">pieces</label>
                    </div>
                </li>

                <li>Have you been integrated with art studio, art marketplace, art entity or other similar partnership for marketing your artworks?
                    <div class="flex gap-5 md:gap-10">
                        <div class="space-x-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">Yes</label>
                        </div>

                        <div class="space-x-2">
                            <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                            <label for="">No</label>
                        </div>
                    </div>
                </li>

                <!-- <li>We have to determine whether an artist are qualified or not to sell their artworks on our platform, but all artists who applied firstly would be consider for Direct Partnership. Direct Partnership means you are qualified artist who can directly display our artworks on our platform. Second, we have Apprenticeship. Apprenticeship is a program for our artists who don’t meet our qualitifications, usually for artist who don’t have art degree. Lastly,  we will reject artist seems far from our qualifications , have low commitment become an artist, and we don’t see any potential in future. We will considerate for artist who applied to have partnership with us with as little as possible for rejection.
                    <div class="space-x-2">
                        <input type="checkbox" class="h-5 w-5 lg:h-8 lg:w-8">
                        <label for="">Yes, I understand for all process of selections</label>
                    </div>
                </li> -->
            </ol>
        </div>

        <div class="text-center">
            <NuxtLink to="/artistfinishquestionnaire"><button class="bg-mystic rounded-lg h-10 w-[120px] font-bold text-xs md:h-[60px] md:w-[200px] md:text-base text-white">Finish</button></NuxtLink>
        </div>

    </div>

</template>