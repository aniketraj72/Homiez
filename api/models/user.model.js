import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAuQMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QAMBABAAIBAQUHAwIHAAAAAAAAAAECAxEEFCExURIyQVJhcaETU4FCsQUiIzRDkcH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/APuIAAAAAA5a0RzVzeZBZNo6ozk9FfPmAn9SemjnblEBP6k9NXYyeisUW9qJSUOxaYQXCMWiUgAAAAAAAAAAELX05F7aclYHOdQFQAAHLWrXja0R7qt5w66TkgVcIUyUydy0T7JiAAEJ1v1QAXiulvCViKAAAAAAI2nRJTadZBzUBUAAGbatp+j/AC10m/7L8l4pjtafCNXj2tNrTa3GZ5iu3va9pteZmUQRXdZiYmOGjZsu2TP9PLPtZiBHtijY8v1MMazrNeC9UAAFlLax6qyvCQXgIoAAADlp0hSnknkgAAqAAKNu/trfj93lvXz07eG9esPI8dEWAAoAI3fwz/L+P+trNsFOzhm0/rlpUABAAFmOdYTVY54rUUAAABVk56IpZO+iIAKAADDtmzz2py0j3huBXiD1cuy4sk6zXSesKdwrM8Lzp7IMC/ZtmnNMTOsUieM9Wymx4qTrOtp9V8REco/AERERERwiPB0FAAQAB2nehcpp3oXIoAAACrJzRWZFYgAoHghly1xV7V59o6vN2jaL5uE8K+UVuy7Xix8p7U9Ks99vvPcxxHvxYxBfO2Zp/VEe0Obzn+5P+lIC7es8fr1/Cdduyx3orLMCt9NvpPfpNfadYaqZKZI1paLQ8Z2tppParMxPWBMe0Muy7VGSezk4X8J8JalQAB2nfhcrxrEUAAABy0a10Ur1WSNJBEHJ4RPsqPM2zLOTLMR3a8IUGuvERoAAAAAAAB2JmJiYnSY5PW2fJ9XDW/jMcXkPR/h064ZjpYStQO1jWVRZSNKpEcBFAAAAEbV7UJAKJjRyeS69dVU8wZNwxee/wbhj89/hrFRk3DH57/BuGPz3+GsBk3DH57/BOwY/Pf4awGPcKfct8O7hj+5ZrAZNwx/csbhj+5ZrNQY52DH9yy/BijDXs1mZ466yt1AFtI0hyleqaKAAAAAAAAI2r2kgFExMSLtIQtToCATExzhzVUdAAAACImeUJxj15ghpqsrTTj4pRWI5OooAAAAAAAAAAAAABprzRmsdABGaR6nZhwB2KR6pRSvQAS005AAAAAAAAAA//9k=",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
