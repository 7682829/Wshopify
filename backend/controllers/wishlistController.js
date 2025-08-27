import userModel from "../models/userModel.js"

// Add product to user wishlist
const addToWishlist = async (req, res) => {
    try {
        const { userId, itemId } = req.body

        const userData = await userModel.findById(userId)
        let wishlistData = userData.wishlistData || {}; 

        // Add item to wishlist (set to true to indicate it's in wishlist)
        wishlistData[itemId] = true;

        await userModel.findByIdAndUpdate(userId, { wishlistData })

        res.json({ success: true, message: "Added to Wishlist!" })
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

// Remove product from user wishlist
const removeFromWishlist = async (req, res) => {
    try {
        const { userId, itemId } = req.body

        const userData = await userModel.findById(userId)
        let wishlistData = userData.wishlistData || {}; 

        // Remove item from wishlist
        delete wishlistData[itemId];

        await userModel.findByIdAndUpdate(userId, { wishlistData })

        res.json({ success: true, message: "Removed from Wishlist!" })
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })  
    }
}

// Get user wishlist data
const getUserWishlist = async (req, res) => {
    try {
        const { userId } = req.body 

        const userData = await userModel.findById(userId)
        let wishlistData = userData.wishlistData || {}; 

        res.json({ success: true, wishlistData });
        
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message }) 
    }
}

export { addToWishlist, removeFromWishlist, getUserWishlist }
