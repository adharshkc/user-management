import { useSelector } from "react-redux";
import { dummyImageUrl, imgUrl } from "../../constants/constant.js";

const ProfileCard = () => {
  const { name, email, phone, imageUrl } = useSelector((store) => store.user);
  return (
    <div className="m-10 w-96 max-w-sm">
      <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div className="relative mx-auto w-36 rounded-full">
          <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
          {imageUrl ? (
            <img
              className="mx-auto h-auto w-full rounded-full"
              src={imgUrl + imageUrl}
              alt="profile"
            />
          ) : (
            <img
              className="mx-auto h-auto w-full rounded-full"
              src={dummyImageUrl}
              alt="profile"
            />
          )}
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {name}
        </h1>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-lg">
            <span>Email:</span>
            <span className="ml-auto">{email}</span>
          </li>
          <li className="flex items-center py-3 text-lg">
            <span>Phone:</span>
            <span className="ml-auto">{phone}</span>
          </li>
        </ul>
        <div className="flex my-5 justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
