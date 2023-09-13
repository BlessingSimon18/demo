import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails
  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://images.unsplash.com/photo-1628191010210-a59de33e5941?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=hillshire-farm-U0BzBTt-5so-unsplash.jpg"
    },
    {
      id: 2,
      foodName: "Veggie Supreme",
      foodDetails: "Onions| Green Capsicum| Mushroom| Black Olives, Sweet Corn, Red Paprika topped with Cheese.",
      foodPrice: 369,
      foodImg: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ivan-torres-MQUqbmszGGM-unsplash.jpg"
    },
    {
      id: 3,
      foodName: "Paneer Burger",
      foodDetails: "Paneer.",
      foodPrice: 149,
      foodImg: "https://images.unsplash.com/photo-1610970878459-a0e464d7592b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=giorgi-iremadze-5ZR4DxAG3RQ-unsplash.jpg"
    },
    {
      id: 4,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg: "https://images.unsplash.com/photo-1598806243937-2072d39bc11d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=hanna-balan-uE2cKmHx7mE-unsplash.jpg"
      // Photo by <a href="https://unsplash.com/@fu_psi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hanna Balan</a> on <a href="https://unsplash.com/photos/uE2cKmHx7mE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
    },
    {
      id: 5,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 105,
      foodImg: "https://images.unsplash.com/photo-1600326145308-d7d5a04f4ce6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=joshua-ryder-N7OD-dUA0hQ-unsplash.jpg"
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo Ice Cream.",
      foodPrice: 219,
      foodImg: "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=anna-bratiychuk-3w2AuRZeeSU-unsplash.jpg"
      // foodImg: "https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=anna-bratiychuk-3w2AuRZeeSU-unsplash.jpg"
    }
  ]
}
