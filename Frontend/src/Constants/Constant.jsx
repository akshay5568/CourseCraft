import axios from "axios";

export const signInLogo =
  "https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp";

export const passwordEmailChecker = (email, password) => {
  const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
    password
  );

  if (!isEmail) {
    return "Please Add @ and Follow proper email convenstion";
  } else if (!isPass) return "Please add @ and special char in Password";

  return null;
};

export const mainURL = "http://localhost:8080";

export const EmptyCartImage = "https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2-2x.jpg";



export const sellerAccountDelete = async (setPop,sellerData,token,isPop) => {
    const res = await axios.post(
      `${mainURL}/delete-seller-account`,
      sellerData,
      {
        headers: {
          Authorization: `Brearer ${token}`,
        },
      }
    );
    if (res.data == true) {
      setPop(!isPop);
    }
  };