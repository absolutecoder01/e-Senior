import React from 'react';

const InstagramLogin: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center min-h-screen">
      <div className="bg-black text-white p-8 rounded-lg shadow-lg w-80">
      <div className="flex items-center justify-center">
            <i
                aria-label="Instagram"
                role="img"
                className="bg-[url('https://static.cdninstagram.com/rsrc.php/v4/yO/r/81fXxo65t4C.png')] bg-[length:176px_492px] bg-[position:0_-52px] w-[175px] h-[51px] bg-no-repeat inline-block mb-10"
            ></i>
        </div>
            <form className="space-y-4">
            <input className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500" placeholder="Phone number, username or email address" type="text" />
            <input className="w-full p-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:border-gray-500" placeholder="Password" type="password" />
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold" type="submit">Log in</button>
            </form>
        <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-700"/>
            <span className="mx-2 text-gray-500">
            OR
            </span>
            <hr className="flex-grow border-gray-700"/>
        </div>
        <div className="text-center mb-4">
            <button className="text-blue-500 font-bold flex items-center justify-center space-x-2">
            <img className="h-6 w-6 ml-7 text-gray-600" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAAAQcP8IZf8IZ/8JZv8HZf8IZv8IZv8IaP8JZ/8HZv8IZv8FZf8YcP9FjP+TvP/g7P/////R4/9Vlf8QYP+Es/9kn/8IZv8nef8JZf8AYP/v9f/Q4v/B2P9GjP8HZv+yz//Q4/83g/8HZv/g6/+Dsv8HZf/n7//////////e6//ZLyHjAAAAK3RSTlMAEGCfz+//XyCQj98w/////////xD//6D/kBD/////7////8///5Cgz+/vONkvXQAAAPJJREFUeAF9kkUCwzAMBGVSGMrM3P//rxBaB+e6s0YREFJpw2y0cgS1cT3DQLmNWPjcwK/XA24RWIuEdg4j7OtHUX0NYedxko5+jCeZMc0En8FsVDDHSd1WDoFdIlogX46awopozWA+ythsd7s9ZxymJBkcs3wcMZC0YHDKhDNbKLowuGYC21zINIWUbQ7EwwJT7YogqgTTKaTY4tIp7HDIRadwwzVlKVyv11HG9cekFBxam8FbTInuQ4LCd3cL2Uzd+4UV/VkHfUIgMLRdQuBi7JsCxh5rQEAfrO9NYSWojruwBOOhDoR8PF+j0fuipNX+AmbCIviMIiwCAAAAAElFTkSuQmCC" alt="" data-csiid="bJbiZ_-UFfq6wPAPk4jfoQ0_2" data-atf="1"/>
            <span>
            Log in with Facebook
            </span>
            </button>
        </div>
        <div className="text-center mb-4">
            <a className="text-sm text-blue-500" href="#">
            Forgotten your password?
            </a>
        </div>
        <div className="text-center mb-4 text-sm text-gray-500">
            <p>
            You can also
            <a className="text-blue-500" href="#">
            report content that you believe is unlawful
            </a>
            in your country without logging in.
            </p>
        </div>
        <div className="text-center mb-4">
            <p className="text-sm">
            Don't have an account?
            <a className="text-blue-500 font-bold" href="#">
            Sign up
            </a>
            </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramLogin;