import pearl1 from './pearl1.jpg';
import pearl2_a from './pearl2_a.jpg';
import pearl2 from './pearl2.jpeg';
import pearl3 from './pearl3.jpg';
import pearl5 from './pearl5.jpg';
import pearl6 from './pearl6.jpg';
import pearl7 from './pearl7.jpg';
import pearl8 from './pearl8.jpg';
import pearl9 from './pearl9.jpg';

import per1 from './per1.jpg';
import per2 from './per2.jpg';
import per3 from './per3.jpg';
import per4 from './per4.jpg';
import per5 from './per5.jpg';
import per6 from './per6.jpg';
import per7 from './per7.jpg';
import per8 from './per8.jpg';
import per9 from './per9.jpg';
import per10 from './per10.jpeg';
import per11 from './per11.jpg';
import per12 from './per12.jpg';

import top1 from './top1.png'
import top2 from './top2.png'
import top3 from './top3.png'
import top4 from './top4.png'
import top5 from './top5.png'
import top6 from './top6.png'
import top7 from './top7.png'
import top8 from './top8.png'
import top9 from './top9.png'
import top10 from './top10.png'
import top11 from './top11.png'

import glass1 from './glass1.jpg';
import glass2 from './glass2.jpg';
import glass3 from './glass3.jpg';
import glass4 from './glass4.jpg';
import glass5 from './glass5.jpg';
import glass6 from './glass6.jpg';
import glass7 from './glass7.jpg';
import glass8 from './glass8.jpg';
import glass9 from './glass9.jpg';
import glass10 from './glass10.jpg';
import glass11 from './glass11.jpg';
import glass12 from './glass12.jpg';
import glass13 from './glass13.jpg';
import glass14 from './glass14.jpg';
import glass15 from './glass15.jpg';
import glass16 from './glass16.jpg';
import glass17_a from './glass17_a.jpg';
import glass17 from './glass17.jpg';



import logo from './logo.png'
import hero_img from './hero_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import about_img from './about_img.png'
import contact_img from './contact_img.png'
import razorpay_logo from './razorpay_logo.png'
import stripe_logo from './stripe_logo.png'
import cross_icon from './cross_icon.png'
import { Tags } from 'lucide-react'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
    razorpay_logo,
    stripe_logo,
    cross_icon
}

export const products = [
    
    {
    _id: "pearl1",
    name: "Women Pearl Layered Back Necklace",
    description: "An elegant, multi-strand pearl necklace designed to drape gracefully down the back. Perfect for low-back dresses or gowns, this statement piece adds timeless sophistication to any formal ensemble.",
    price: 1350,
    image: [pearl1],
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["One Size"],
    date: 1716634345801,
    bestseller: true,
    tags: ["pearl", "necklace", "layered", "women", "statement", "back jewellery", "accessories", "jewellery"]
    },

{
    _id: "pearl2",
    name: "Women Freshwater Pearl Beach Choker",
    description: "A handcrafted choker made with freshwater pearls, sea-green beads, and a delicate crystal drop charm. Designed for beach days or boho outfits, this necklace catches the sunlight and turns heads effortlessly.",
    price: 780,
    image: [pearl2, pearl2_a],
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["One Size"],
    date: 1716634345843,
    bestseller: true,
    tags: ["pearl", "necklace", "choker", "women", "beachwear", "boho", "crystal", "accessories", "jewellery"]
},

{
    _id: "pearl3",
    name: "Women Pearl and Gold Layered Necklace Set",
    description: "A dainty 3-layered necklace set featuring a pearl choker and two gold chains with pearl accents. Versatile enough for casual and evening wear, this set adds charm and elegance in every layer.",
    price: 990,
    image: [pearl3],
    category: "Women",
    subCategory: "Jewellery",
    sizes: ["One Size"],
    date: 1716634345885,
    bestseller: false,
    tags: ["pearl", "gold", "necklace", "layered", "women", "minimalist", "jewellery", "accessories"]
},

{
    _id: "pearl5",
    name: "Women Gold Chain Necklace with Blue & Crystal Heart Charms",
    description: "A romantic gold-toned Y-necklace adorned with two heart-shaped crystal charms—one vibrant sapphire blue and one icy clear—designed to accentuate your neckline with elegance and charm.",
    price: 1599,
    image: [pearl5],
    category: "Women",
    subCategory: "Jewelry",
    sizes: ["One Size"],
    date: 1717256345448,
    bestseller: true,
    tags: ["women", "necklace", "heart charm", "jewelry", "blue crystal", "accessories", "jewellery"]
},

{
    _id: "pearl6",
    name: "Women Chunky Shell Bead Choker with Gold Detailing",
    description: "Bold and beautiful, this statement choker features sculpted shell-like beads with ornate golden connectors, perfect for adding a touch of the ocean to any outfit.",
    price: 2399,
    image: [pearl6],
    category: "Women",
    subCategory: "Jewelry",
    sizes: ["One Size"],
    date: 1717356345448,
    bestseller: true,
    tags: ["women", "choker", "shell jewelry", "gold", "statement necklace", "beach style", "accessories", "jewellery"]
},

{
    _id: "pearl7",
    name: "Women Amber Crystal Pendant Necklace",
    description: "An elegant rectangular amber-hued crystal pendant suspended from a sleek gold chain, perfect for refined, everyday sophistication or warm-toned evening glam.",
    price: 1299,
    image: [pearl7],
    category: "Women",
    subCategory: "Jewelry",
    sizes: ["One Size"],
    date: 1717456345448,
    bestseller: false,
    tags: ["women", "pendant", "amber crystal", "gold necklace", "elegant", "jewelry", "accessories", "jewellery"]
},

{
    _id: "pearl8",
    name: "Women Pearl Layered Necklace",
    description: "A dreamy seaside-inspired set featuring layered natural pearl necklaces ideal for summer dining or resort glamour. Handcrafted elegance at its finest.",
    price: 2699,
    image: [pearl8],
    category: "Women",
    subCategory: "Jewelry",
    sizes: ["One Size"],
    date: 1717556345448,
    bestseller: true,
    tags: ["women", "pearl", "jewelry set", "necklace", "luxury", "resort wear", "accessories", "jewellery"]
},

{
    _id: "pearl9",
    name: "Women Statement Pearl",
    description: "A luminous combination of pearls and details on necklaces—ideal for making a bold and artistic statement at any event.",
    price: 2899,
    image: [pearl9],
    category: "Women",
    subCategory: "Jewelry",
    sizes: ["One Size"],
    date: 1717656345448,
    bestseller: true,
    tags: ["women", "pearl jewelry", "shell", "statement piece", "accessories", "jewellery"]
},

{
    _id: "per1",
    name: "Unisex Luxury Amber Glass Perfume - Flame Essence",
    description: "A bold and sophisticated unisex fragrance housed in a jewel-like amber glass bottle. Notes of smoky spice and warm woods make this the perfect statement scent for evenings.",
    price: 1450,
    image: [per1],
    category: "Fragrance",
    subCategory: "Perfume",
    sizes: ["50ml", "75ml"],
    date: 1716639355448,
    bestseller: true,
    tags: ["perfume", "unisex", "amber", "fragrance", "flame", "luxury scent"]
},

{
    _id: "per2",
    name: "Unisex Artistic Swirl Perfume - Lum Eau de Parfum",
    description: "An elegant perfume encased with stunning golden and black ink swirls. Featuring warm amber, vetiver, and subtle hints of musk—perfect for both men and women.",
    price: 1199,
    image: [per2],
    category: "Fragrance",
    subCategory: "Perfume",
    sizes: ["50ml", "100ml"],
    date: 1716639365448,
    bestseller: true,
    tags: ["perfume", "unisex", "lum", "warm", "amber", "fragrance"]
},

{
    _id: "per3",
    name: "Women’s Subtle Glow Eau de Parfum - Sheer Light",
    description: "Delicate and airy, this women’s fragrance is captured in a minimal glass bottle with golden accents. Perfect for daytime wear, with notes of citrus blossom, white tea, and musk.",
    price: 1350,
    image: [per3],
    category: "Women",
    subCategory: "Fragrance",
    sizes: ["30ml", "50ml", "100ml"],
    date: 1716639375448,
    bestseller: true,
    tags: ["perfume", "women", "light", "fresh scent", "daytime fragrance", "fragrance"]
},

{
    _id: "per4",
    name: "Women’s Tropical Floral Perfume - Sunfig Bloom",
    description: "Immerse yourself in a summer garden with this bright and exotic fragrance. Blended with fig, jasmine, and neroli, and presented in a faceted glass bottle ideal for vibrant days.",
    price: 1250,
    image: [per4],
    category: "Women",
    subCategory: "Fragrance",
    sizes: ["50ml", "75ml"],
    date: 1716639385448,
    bestseller: true,
    tags: ["perfume", "women", "summer", "tropical", "floral", "fig scent", "sunfig", "fragrance"]
},

{
    _id: "per5",
    name: "Unisex Aqua Minimalist Perfume Duo - Wave Eau",
    description: "Clean, crisp, and modern. These twin minimalist bottles feature a serene aquatic scent that combines sea salt, white amber, and driftwood. Ideal for daily freshness.",
    price: 1799,
    image: [per5],
    category: "Fragrance",
    subCategory: "Perfume",
    sizes: ["60ml each"],
    date: 1716639395448,
    bestseller: true,
    tags: ["perfume", "unisex", "aqua", "fresh", "minimalist", "daily wear", "wave", "fragrance"]
},

{
    _id: "per6",
    name: "Elegant Round Perfume Bottle - Floral Minimalist Design",
    description: "A serene, floral-inspired perfume bottle with a sleek, rounded glass design. Perfectly balances simplicity and elegance, ideal for displaying your favorite scents or gifting in style.",
    price: 450,
    image: [per6],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["100ml", "150ml", "200ml"],
    date: 1716634345448,
    bestseller: true,
    tags: ["perfume", "perfume bottle", "minimalist", "floral", "gift", "glass bottle", "women fragrance", "fragrance", "elegant"]
},

{
_id: "per7",
name: "Luxury Blue Glass Perfume Bottle - Golden Cap Designer Scent",
description: "A luxurious perfume bottle featuring bold blue glass and a gold engraved cap. This statement piece exudes sophistication and is perfect for collector and premium fragrance lovers.",
price: 890,
image: [per7],
category: "Beauty",
subCategory: "Perfume",
sizes: ["75ml", "100ml"],
date: 1716634346448,
bestseller: true,
tags: ["perfume", "luxury perfume", "blue bottle", "gold cap", "designer", "glass perfume bottle", "premium", "gift", "statement"]
},

{
    _id: "per8",
    name: "Premium Glass Perfume Set - Classic Collection of Fragrance Bottles",
    description: "An elegant trio of premium glass perfume bottles. Includes varying spray types and sizes—ideal for luxury gifting or refined home decor.",
    price: 1299,
    image: [per8],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["30ml", "50ml", "100ml"],
    date: 1716634347448,
    bestseller: true,
    tags: ["perfume", "perfume bottles", "glass bottles", "fragrance collection", "gift set", "luxury", "elegant", "classic"]
}

{
    _id: "per9",
    name: "Classic Square Perfume Bottle - Amber Glow for Women",
    description: "A timeless, square-shaped bottle with a soft amber hue, ideal for women who appreciate elegance and warm floral notes. A staple design that radiates classic sophistication.",
    price: 620,
    image: [per9],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["50ml", "100ml"],
    date: 1716634348448,
    bestseller: true,
    tags: ["perfume", "women perfume", "amber scent", "square bottle", "classic design", "fragrance", "warm notes", "elegant", "feminine", "floral"]

}

{
    _id: "per10",
    name: "Minimalist Cube Perfume Bottle -  Unisex",
    description: "A sleek, crystal-clear cubic perfume bottle with a modern aesthetic. Perfect for unisex fragrances and lovers of minimalist, clean fragrances.",
    price: 580,
    image: [per10],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["100ml"],
    date: 1716634349448,
    bestseller: false,
    tags: ["perfume", "unisex perfume", "minimalist", "modern", "fragrance", "clean aesthetic"]

}

{
    _id: "per11",
    name: "Citrus Perfume Bottle - Vibrant Orange Inspired Fragrance",
    description: "This zesty perfume bottle, smells by fresh oranges, encapsulates the essence of citrus freshness. A bold choice for a fruity, energizing fragrance.",
    price: 670,
    image: [per11],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["75ml", "150ml"],
    date: 1716634350448,
    bestseller: true,
    tags: ["perfume", "citrus perfume", "orange", "fresh", "fruity fragrance", "fragrance", "summer scent", "bold", "tropical"]

}

{
    _id: "per12",
    name: "Soft Teardrop Perfume Bottle - Earthy Toned Design for Her",
    description: "A gently curved, teardrop-shaped perfume bottle with wooden accents and a warm-toned base. Reflects natural elegance, perfect for earthy or musky fragrances.",
    price: 720,
    image: [per12],
    category: "Beauty",
    subCategory: "Perfume",
    sizes: ["60ml", "120ml"],
    date: 1716634351448,
    bestseller: false,
    tags: ["perfume", "earthy scent", "natural", "organic", "warm tones", "women fragrance", "fragrance", "soft design"]

},

{
    _id: "top1",
    name: "Women Rust Collared Ribbed Cotton Top",
    description: "A fitted ribbed cotton top with a retro-inspired white collar and cuff trim, perfect for both casual and smart outings. Features a short-sleeve design with front button detailing.",
    price: 450,
    image: [top1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L"],
    date: 1722512345448,
    bestseller: true,
    tags: ["women", "topwear", "cotton", "collared top", "ribbed top", "rust top", "smart casual"]
},

{
    _id: "top2",
    name: "Women Floral Print Tie-Neck Blouse with Vintage Skirt",
    description: "A cheerful vintage-inspired outfit featuring a vibrant floral tie-neck blouse paired with a pastel floral A-line skirt. Ideal for spring brunches or garden parties.",
    price: 699,
    image: [top2],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1722612345448,
    bestseller: true,
    tags: ["women", "blouse", "floral", "skirt", "vintage", "tie-neck", "topwear", "spring outfit"]
},

{
    _id: "top3",
    name: "Women Oversized Beige Co-ord Sweatshirt Set",
    description: "A cozy oversized sweatshirt paired with matching joggers in a soft beige tone. Minimalist, relaxed, and effortlessly stylish for your laid-back wardrobe.",
    price: 899,
    image: [top3],
    category: "Women",
    subCategory: "Loungewear",
    sizes: ["S", "M", "L", "XL"],
    date: 1722712345448,
    bestseller: false,
    tags: ["women", "co-ord set", "sweatshirt", "loungewear", "oversized", "beige", "casual"]
},

{
    _id: "top4",
    name: "Women Off-Shoulder Rust Linen Wrap Dress",
    description: "A sun-kissed off-shoulder wrap dress crafted in breathable linen with billowy sleeves and a flattering waist tie. Designed for elevated summer days.",
    price: 1199,
    image: [top4],
    category: "Women",
    subCategory: "Dresses",
    sizes: ["M", "L", "XL"],
    date: 1722812345448,
    bestseller: true,
    tags: ["women", "dress", "linen dress", "off-shoulder", "wrap dress", "rust", "summer wear"]
},

{
    _id: "top5",
    name: "Women White Cotton Shirt and Skirt Set",
    description: "A classic white cotton shirt paired with a soft tiered skirt. The look blends elegance and ease, perfect for resort evenings or minimalist city style.",
    price: 980,
    image: [top5],
    category: "Women",
    subCategory: "Co-ords",
    sizes: ["S", "M", "L"],
    date: 1722912345448,
    bestseller: false,
    tags: ["women", "white shirt", "cotton", "skirt set", "co-ords", "elegant", "resort wear"]
},

{
    _id: "top6",
    name: "Men Yellow Striped Short Sleeve Cotton Shirt",
    description: "A fresh, summer-ready striped shirt in bold yellow tones. Made from breathable cotton with a sharp collar and front pocket. Pairs well with casual or smart bottoms.",
    price: 620,
    image: [top6],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    date: 1723012345448,
    bestseller: true,
    tags: ["men", "shirt", "striped shirt", "cotton", "yellow", "casual wear", "summer shirt"]
},

{
    _id: "top7",
    name: "Women Black Oversized Jacket Dress with Beret",
    description: "Channel effortless streetwear charm with this black oversized stitched jacket-dress combo. Styled with a beret and socks, it’s a bold, youthful statement.",
    price: 750,
    image: [top7],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["S", "M", "L"],
    date: 1723112345448,
    bestseller: true,
    tags: ["women", "jacket", "outerwear", "oversized", "black dress", "streetwear", "beret", "fashion"]
},

{
    _id: "top8",
    name: "Women Rust Textured Knit Sweater",
    description: "Elevate your fall wardrobe with this rust-toned textured knit sweater. Featuring a relaxed silhouette, full sleeves, and a cozy round neck, it's perfect for breezy days or layering over skirts and denims alike.",
    price: 1299,
    image: [top8],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L", "XL"],
    date: 1717234345448,
    bestseller: true,
    tags: ["women", "sweater", "knit", "rust", "topwear", "long sleeve", "round neck", "casual"]
},

{
    _id: "top9",
    name: "Women Red Oversized Wool Blend Coat",
    description: "Command attention with this bold red oversized coat, tailored in a soft wool blend for premium warmth and elegance. Designed with broad lapels and a plush texture, it pairs seamlessly with minimalist innerwear.",
    price: 2899,
    image: [top9],
    category: "Women",
    subCategory: "Outerwear",
    sizes: ["M", "L", "XL"],
    date: 1717244345448,
    bestseller: true,
    tags: ["women", "coat", "outerwear", "red", "wool", "oversized", "winter wear"]
},

{
    _id: "top10",
    name: "Women Rust Knit Top with Wide-Leg Pants",
    description: "A modern power combo: rust knit mock-neck top paired with high-waisted, wide-leg orange trousers. Structured yet flowy, this outfit captures effortless sophistication and street-style edge.",
    price: 2199,
    image: [top10],
    category: "Women",
    subCategory: "Co-ords",
    sizes: ["S", "M", "L"],
    date: 1717254345448,
    bestseller: true,
    tags: ["women", "co-ord set", "rust", "wide leg pants", "knitwear", "chic", "modern", "fashion"]
},

{
    _id: "top11",
    name: "Women Rust Cardigan with White Tee",
    description: "Soft, chunky knit cardigan in a rich rust hue layered over a crisp white tee. This classic combo offers the right balance of cozy and cool, ideal for transitional seasons or relaxed weekends.",
    price: 999,
    image: [top11],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["XS", "S", "M", "L"],
    date: 1717264345448,
    bestseller: true,
    tags: ["women", "cardigan", "rust", "knitwear", "casual", "topwear", "layered look", "white tee"]
},

{
    _id: "shoe1",
    name: "Men Casual Sneakers with Retro Stripes",
    description: "Men's retro-style casual sneakers with multicolor stripes, lace-up front, and cushioned sole. Perfect for streetwear, travel, or everyday comfort.",
    price: 1999,
    image: [shoe1],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["7", "8", "9", "10"],
    tags: ["men sneakers", "casual sneakers", "retro sneakers", "striped shoes", "streetwear shoes", "beige sneakers", "everyday footwear", "trendy sneakers", "travel shoes", "lace up sneakers"],
    date: 1717234345448,
    bestseller: true
},

{
    _id: "shoe2",
    name: "Men Tan Brown Casual Sneakers",
    description: "Sleek and minimal tan brown men’s sneakers with a smooth finish and clean design. Ideal for casual wear, office-casual looks, or weekend outfits.",
    price: 2299,
    image: [shoe2],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["6", "8", "9", "11"],
    tags: ["men sneakers", "casual sneakers", "tan sneakers", "brown shoes", "everyday footwear", "neutral sneakers", "low top sneakers", "streetwear sneakers", "men footwear", "trendy casual shoes"],
    date: 1717334345448,
    bestseller: true
},

{
    _id: "shoe3",
    name: "Unisex Brown Suede Sneakers with White Stripes",
    description: "Vintage-inspired unisex sneakers in rich brown suede with iconic white stripes. A versatile pick for both men and women, perfect for casual and retro looks.",
    price: 2499,
    image: [shoe3],
    category: "Unisex",
    subCategory: "Footwear",
    sizes: ["5", "6", "7", "8", "9"],
    tags: ["unisex sneakers", "brown sneakers", "retro sneakers", "casual sneakers", "striped shoes", "suede sneakers", "vintage sneakers", "everyday shoes", "men footwear", "women footwear"],
    date: 1717434345448,
    bestseller: false
},

{
    _id: "shoe4",
    name: "Men Blue Chunky Sports Sneakers",
    description: "Chunky blue sneakers for men with athletic design, rugged sole, and breathable panels. Great for long walks, gym sessions, or bold fashion statements.",
    price: 2799,
    image: [shoe4],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    tags: ["men sneakers", "chunky sneakers", "sports sneakers", "blue sneakers", "streetwear shoes", "gym shoes", "athletic sneakers", "fashion sneakers", "casual shoes", "outdoor sneakers"],
    date: 1717534345448,
    bestseller: true
},

{
    _id: "shoe5",
    name: "Men Olive Green Chunky Sneakers",
    description: "Stylish and versatile, these olive green sneakers offer all-day comfort with a bold, sporty edge. Perfect for streetwear looks or casual days out.",
    price: 1899,
    image: [shoe5],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["7", "8", "9", "10"],
    tags: ["men sneakers", "chunky sneakers", "olive green sneakers", "streetwear sneakers", "casual sneakers", "fashion shoes", "bold sneakers", "everyday footwear", "sporty sneakers", "trendy sneakers"],
    date: 1717234545448,
    bestseller: true
},

{
    _id: "shoe6",
    name: "Men Maroon Low Top Casual Sneakers",
    description: "Crafted with a textured finish and clean white sole, these maroon low-top sneakers add a refined pop of color to any casual outfit.",
    price: 1699,
    image: [shoe6],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["6", "7", "9", "11"],
    tags: ["men sneakers", "maroon sneakers", "low top sneakers", "casual sneakers", "streetwear shoes", "everyday footwear", "fashion sneakers", "men casual shoes", "trendy sneakers", "colorful sneakers"],
    date: 1717234645448,
    bestseller: false
},

{
    _id: "shoe7",
    name: "Women Chunky Sole Pink Sneakers",
    description: "Stand out with these blush pink chunky sneakers. Designed for bold comfort, they’re perfect for trendsetters who love elevated street style.",
    price: 2149,
    image: [shoe7],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["4", "5", "6", "7"],
    tags: ["women sneakers", "chunky sneakers", "pink sneakers", "street style shoes", "fashion sneakers", "bold sneakers", "trendy women footwear", "casual sneakers", "athleisure shoes", "everyday shoes"],
    date: 1717234745448,
    bestseller: true
},

{
    _id: "shoe8",
    name: "Unisex Glossy Black Chelsea Boots",
    description: "Sleek and polished, these black Chelsea boots are crafted for modern formal and semi-formal looks. Slip-on comfort meets premium finish.",
    price: 2599,
    image: [shoe8],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    tags: ["chelsea boots", "black boots", "unisex boots", "formal footwear", "men boots", "women boots", "leather boots", "classic boots", "slip-on boots", "semi-formal shoes"],
    date: 1717234845448,
    bestseller: false
},

{
    _id: "shoe9",
    name: "Men Black Suede Lace-Up Combat Boots",
    description: "These rugged black combat boots crafted in suede offer a bold, masculine edge with excellent traction—perfect for urban or outdoor adventures.",
    price: 2499,
    image: [shoe9],
    category: "Men",
    subCategory: "Footwear",
    sizes: ["8", "9", "10", "11"],
    tags: ["combat boots", "black boots", "men boots", "suede boots", "lace-up boots", "rugged boots", "outdoor footwear", "casual boots", "trendy boots", "winter boots"],
    date: 1717234945448,
    bestseller: false
},

{
    _id: "shoe10",
    name: "Women Knee-High Leather Block Heel Boots",
    description: "Chic and structured, these knee-high leather boots with a square toe and block heel bring elegance to every step—ideal for winter fashion or formal layering.",
    price: 2799,
    image: [shoe10],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["5", "6", "7", "8"],
    tags: ["women boots", "knee-high boots", "leather boots", "block heel boots", "long boots", "formal footwear", "winter boots", "stylish women shoes", "fashion boots", "trendy boots"],
    date: 1717235045448,
    bestseller: true
},

{
    _id: "shoe11",
    name: "Women Dual-Tone Pointed Toe Heels",
    description: "Elegant dual-tone women’s heels featuring a pointed toe design in cream and red shades. Perfect for formal occasions, evening outings, or chic office looks.",
    price: 2799,
    image: [shoe11],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["5", "6", "7", "8"],
    tags: ["women heels", "pointed toe heels", "dual-tone heels", "formal heels", "party shoes", "office footwear", "stylish heels", "cream heels", "elegant women shoes", "trendy heels"],
    date: 1717334657821,
    bestseller: false
},

{
    _id: "shoe12",
    name: "Women Pastel Stiletto Heels (Green & Blush Pink)",
    description: "Elevate your elegance with these pastel pointed stiletto heels in soft green and blush pink—perfect for brunches, events, or your chic everyday style.",
    price: 2299,
    image: [shoe12],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["5", "6", "7", "8", "9"],
    tags: ["women heels", "stiletto heels", "pastel heels", "party heels", "formal footwear", "green heels", "pink heels", "elegant heels", "fashion heels", "high heels"],
    date: 1717235345448,
    bestseller: true
},

{
    _id: "shoe13",
    name: "Women Black Patent Leather Red Sole Heels",
    description: "Striking and sultry, these black patent leather heels with red accents command attention—made for power looks and night-out glamour.",
    price: 2599,
    image: [shoe13],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["4", "5", "6", "8"],
    tags: ["women heels", "black heels", "patent leather heels", "party heels", "formal footwear", "high heels", "stylish women shoes", "night out heels", "red sole shoes", "glam heels"],
    date: 1717235445448,
    bestseller: false
},

{
    _id: "shoe14",
    name: "Women Pointed Toe Slip-On Black Mules",
    description: "These sleek, pointed black mules feature a slip-on design with minimal flair—ideal for a refined yet effortless everyday statement.",
    price: 1899,
    image: [shoe14],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["5", "6", "7"],
    tags: ["women mules", "black shoes", "slip-on shoes", "pointed toe footwear", "everyday women shoes", "office shoes", "stylish mules", "casual footwear", "chic women shoes", "minimalist shoes"],
    date: 1717235545448,
    bestseller: false
},

{
    _id: "shoe15",
    name: "Women Classic Pointed Heels (Lemon Yellow & Red)",
    description: "A playful mix of bold and soft, these lemon yellow and fire red pointed heels bring retro charm and versatility to your wardrobe staples.",
    price: 2199,
    image: [shoe15],
    category: "Women",
    subCategory: "Footwear",
    sizes: ["4", "5", "7", "8"],
    tags: ["women heels", "yellow heels", "red heels", "classic heels", "pointed heels", "retro heels", "party footwear", "formal shoes", "bold women shoes", "trendy heels"],
    date: 1717235645448,
    bestseller: true
},

{
    _id: "glass1",
    name: "Women White Frame Slim Cat-Eye Sunglasses",
    description: "Sleek and futuristic, these white frame cat-eye sunglasses offer sharp edges and slim lenses—ideal for ultra-modern daytime looks.",
    price: 1099,
    image: [glass1],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "cat-eye sunglasses", "white frame sunglasses", "slim eyewear", "fashion sunglasses", "trendy shades", "summer accessories", "statement eyewear", "retro sunglasses", "stylish sunglasses"],
    date: 1717236145448,
    bestseller: true
},

{
    _id: "glass2",
    name: "Women Oversized Transparent Red Round Sunglasses",
    description: "Turn heads with these oversized transparent red sunglasses. A bold blend of retro and glam, perfect for sun-soaked moments and selfies.",
    price: 1199,
    image: [glass2],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "oversized sunglasses", "red sunglasses", "round frame sunglasses", "retro eyewear", "transparent sunglasses", "fashion accessories", "bold statement sunglasses", "trendy shades", "summer style"],
    date: 1717236245448,
    bestseller: true
},

{
    _id: "glass3",
    name: "Unisex Octagon Gradient Blue Sunglasses",
    description: "These octagon-shaped sunglasses with golden frames and blue gradient lenses bring a playful twist to any sunny day outfit—versatile for any gender.",
    price: 1399,
    image: [glass3],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "octagon sunglasses", "blue gradient lenses", "gold frame eyewear", "geometric sunglasses", "retro sunglasses", "fashion eyewear", "festival sunglasses", "trendy unisex shades", "modern style"],
    date: 1717236345448,
    bestseller: false
},

{
    _id: "glass4",
    name: "Unisex Black & Gold Geometric Round Sunglasses",
    description: "Make a statement with these matte black and gold sunglasses featuring bold round lenses and geometric frames—minimalist yet sharp.",
    price: 1299,
    image: [glass4],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "geometric sunglasses", "black round sunglasses", "gold frame eyewear", "statement sunglasses", "retro style sunglasses", "modern sunglasses", "bold unisex eyewear", "everyday sunglasses", "fashion accessories"],
    date: 1717236445448,
    bestseller: false
},

{
    _id: "glass5",
    name: "Unisex Mint Green Chunky Frame Sunglasses",
    description: "These mint green chunky sunglasses blend retro funk with modern cool. Their bold frame and soft hue make them an instant mood-booster.",
    price: 999,
    image: [glass5],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "green sunglasses", "chunky frame sunglasses", "retro sunglasses", "fashion eyewear", "bold sunglasses", "festival sunglasses", "colorful eyewear", "trendy unisex shades", "summer style"],
    date: 1717236545448,
    bestseller: false
},

{
    _id: "glass6",
    name: "Unisex Oversized Amber Shield Sunglasses",
    description: "Sporty meets futuristic in these oversized amber shield sunglasses. Perfect for festival wear, road trips, or high-impact street styling.",
    price: 1149,
    image: [glass6],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "oversized sunglasses", "amber sunglasses", "shield sunglasses", "sporty eyewear", "festival sunglasses", "trendy shades", "statement sunglasses", "retro futuristic style", "bold fashion eyewear"],
    date: 1717236645448,
    bestseller: true
},

{
    _id: "glass7",
    name: "Unisex White Cat-Eye Statement Sunglasses",
    description: "Unapologetically bold, these sharp white cat-eye sunglasses redefine retro drama. Rock them for photoshoots, festivals, or standout style days.",
    price: 1299,
    image: [glass7],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "cat-eye sunglasses", "white frame sunglasses", "statement sunglasses", "retro style sunglasses", "bold eyewear", "fashion accessories", "festival sunglasses", "stylish eyewear", "modern design"],
    date: 1717236745448,
    bestseller: true
},

{
    _id: "glass8",
    name: "Unisex Yellow Transparent Square Sunglasses",
    description: "These bright yellow square sunglasses bring summer energy in a frame. Transparent, chunky, and made to shine under sunlight.",
    price: 1050,
    image: [glass8],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "yellow sunglasses", "square frame sunglasses", "transparent eyewear", "fashion sunglasses", "trendy shades", "colorful sunglasses", "retro eyewear", "festival sunglasses", "statement eyewear"],
    date: 1717236845448,
    bestseller: false
},

{
    _id: "glass9",
    name: "Unisex Ice Blue Matte Square Sunglasses",
    description: "Cool down your summer fits with these matte ice-blue sunglasses. Chunky yet minimal—perfect for adding low-key color to any outfit.",
    price: 989,
    image: [glass9],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex sunglasses", "blue sunglasses", "matte sunglasses", "square frame eyewear", "chunky sunglasses", "fashion accessories", "summer sunglasses", "retro style eyewear", "minimal sunglasses", "colorful eyewear"],
    date: 1717236945448,
    bestseller: false
},

{
    _id: "glass10",
    name: "Women’s Slim Oval Tinted Red Sunglasses",
    description: "A bold vibe in a compact frame—these red-tinted oval sunglasses elevate everyday glam effortlessly. Made for city streets and golden hour glow.",
    price: 1125,
    image: [glass10],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "red sunglasses", "oval sunglasses", "slim sunglasses", "tinted eyewear", "fashion sunglasses", "street style eyewear", "retro oval frame", "trendy accessories", "bold eyewear"],
    date: 1717237045448,
    bestseller: true
},

{
    _id: "glass11",
    name: "Unisex Oversized Clear Frame Glasses",
    description: "Minimalist, oversized, and absolutely iconic. These clear frame glasses work as a statement accessory or functional chic for any look.",
    price: 899,
    image: [glass11],
    category: "Unisex",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["unisex glasses", "clear frame eyewear", "oversized sunglasses", "minimalist accessories", "statement sunglasses", "fashion eyewear", "retro style sunglasses", "everyday wear eyewear", "modern sunglasses", "bold style"],
    date: 1717237145448,
    bestseller: false
},

{
    _id: "glass12",
    name: "Women’s Sharp Black Cat-Eye Sunglasses",
    description: "Powerfully sleek and dramatic, these black cat-eye sunglasses add instant edge to any outfit. Dark, sharp, and unmissable.",
    price: 1199,
    image: [glass12],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "black cat-eye sunglasses", "sharp sunglasses", "dark eyewear", "statement sunglasses", "fashion accessories", "retro sunglasses", "bold cat-eye style", "trendy sunglasses", "editorial eyewear"],
    date: 1717237245448,
    bestseller: true
},

{
    _id: "glass13",
    name: "Men’s Classic Dark Tinted Rectangle Sunglasses",
    description: "Timeless with a sharp edge—these dark rectangular sunglasses are made for everyday cool. Pair them with a blazer or basics and you’re set.",
    price: 1050,
    image: [glass13],
    category: "Men",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["men sunglasses", "rectangle frame sunglasses", "dark tinted sunglasses", "classic eyewear", "fashion accessories", "everyday sunglasses", "retro style", "street style sunglasses", "sharp sunglasses", "trendy eyewear"],
    date: 1717237345448,
    bestseller: false
},

{
    _id: "glass14",
    name: "Women’s Slim Green Oval Sunglasses",
    description: "Sleek and futuristic, these slim oval sunglasses in moss green are the perfect pick for minimalists with taste. Light but loaded with style.",
    price: 975,
    image: [glass14],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "green sunglasses", "oval sunglasses", "slim eyewear", "modern sunglasses", "fashion sunglasses", "trendy eyewear", "street style sunglasses", "colorful eyewear", "bold accessories"],
    date: 1717237445448,
    bestseller: true
},

{
    _id: "glass15",
    name: "Women’s Rimless Tinted Winged Sunglasses",
    description: "An elevated, sharp look with rimless construction and winged edges. These dark-tinted sunglasses feel both avant-garde and graceful.",
    price: 1320,
    image: [glass15],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "rimless sunglasses", "winged sunglasses", "tinted eyewear", "avant-garde sunglasses", "statement sunglasses", "fashion eyewear", "trendy sunglasses", "retro style sunglasses", "bold eyewear"],
    date: 1717237545448,
    bestseller: false
},

{
    _id: "glass16",
    name: "Women’s Frosted Cat-Eye Sunglasses in Steel Blue",
    description: "A bold and icy silhouette—these frosted steel blue cat-eye sunglasses cut through the ordinary. Sharp, futuristic, unforgettable.",
    price: 1249,
    image: [glass16],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "cat-eye sunglasses", "steel blue sunglasses", "frosted frame eyewear", "fashion accessories", "statement sunglasses", "retro cat-eye style", "bold eyewear", "editorial sunglasses", "modern style"],
    date: 1717237645448,
    bestseller: true
},

{
    _id: "glass17",
    name: "Women’s Oversized Matte Black Wrap Sunglasses",
    description: "Bold yet refined—these oversized matte black wrap sunglasses exude attitude and sophistication. Designed for power moves and high contrast styling.",
    price: 1399,
    image: [glass17, glass17_a],
    category: "Women",
    subCategory: "Accessories",
    sizes: ["free-size"],
    tags: ["women sunglasses", "oversized sunglasses", "matte black sunglasses", "wrap frame sunglasses", "fashion accessories", "statement eyewear", "trendy sunglasses", "bold style sunglasses", "editorial fashion eyewear", "luxury look sunglasses"],
    date: 1717237745448,
    bestseller: true
}

]