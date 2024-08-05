<script>
const artworkTitle = getArtworkTitle
</script>

<template>
    <div class="p-10 text-base lg:text-2xl">
        <div class="flex">
            <div>
                <img src="" alt="">
                <img src="" alt="">
                <img src="" alt="">
            </div>

            <div class="bg-[#D9D9D9] flex flex-col font-bold gap-10 p-10">
                <span>Price</span>

                <div class="flex flex-col gap-5">
                    <button class="bg-[#174cd3] text-white xl:h-[60px] xl:w-[280px]">Add to Cart</button>
                    <button class="bg-white text-[#174cd3] xl:h-[60px] xl:w-[280px]">Go to Cart</button>
                </div>

                <!-- <button>Make An Offer</button> -->
            </div>
        </div>

        <div class="p-10 space-y-10">
            <div class="space-y-2">
                <h4>Artwork Title</h4>
                <h6>Series</h6>
            </div>

            <div>
                <h6>Artist Name</h6>
                <h6>Year</h6>
            </div>

            <div>
                <h6>Medium</h6>
                <h6>Dimension</h6>
                <h6>Artstyle</h6>
            </div>

            <div class="flex">
                <button>Likes</button>
                <button>Share</button>
            </div>

            <h6>100% Money Back Guarantee</h6>
        </div>

        <div>
            <h4 class="font-bold">About The Art</h4>
            <h6>Artwork Process</h6>
            <p>Lorem Ipsum</p>
        </div>
    </div>
</template>