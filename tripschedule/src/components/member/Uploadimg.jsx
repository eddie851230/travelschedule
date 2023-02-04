import React, { useState, useContext } from "react";
import { http } from "WebAPI";
import { UilCameraPlus } from "@iconscout/react-unicons";
import AuthContext from "contexts";


const Uploadimg = () => {
    const { user } = useContext(AuthContext)
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);


    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        console.log("imagePreviewUrl", imagePreviewUrl)
        console.log("imagePreviewUrl", imagePreviewUrl)
        console.log("imagePreviewUrl", imagePreviewUrl)
        console.log("imagePreviewUrl", imagePreviewUrl)
        console.log("imagePreviewUrl", imagePreviewUrl)

        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        };

        reader.readAsDataURL(file);
        // handleSubmit();
    };

    const handleUpload = () => {
        handleImageChange()
        let formData = new FormData();
        formData.append("image", imagePreviewUrl);
        console.log("formData", formData)
        console.log("formData", formData)
        console.log("formData", formData)
        console.log("formData", formData)


        // http
        //     .post("/uploadimg", formData)
        //     .then((res) => {
        //         console.log(res.data);
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });
    };



    return (
        <div style={{ backgroundColor: "transparent" }}>

            <button onClick={e => handleUpload(e)}>
                <input
                    type="file" accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                /><UilCameraPlus /></button>

            {<img src={imagePreviewUrl ? imagePreviewUrl : user["profile_photo_path"]} alt="avatar" id="avatar" />}
            


        </div>
    );
};

export default Uploadimg;