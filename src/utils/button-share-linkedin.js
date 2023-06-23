import axios from "axios";

const YOUR_ACCESS_TOKEN =
  "AQX_Az5hKFZVFkcmkRzWtiaMv9UZHudOl9Fawg7Mm1mD7BFwEJ6QDpV03g_S3xNAkfugAeQ2WLs6qi2pkQLuTF8rAQWF8hI7SYDB5Oedvf_QNEHnt1P8t1s6pxohtRskEqSZofuwfqjyTKB3fiHIPZlrw-mibrzF9AY4DBrRR43OtOQS-I79j5Hmjji9dmTzJmjeqDMv_bkf_RCp8t9V7aHwwUZIrerN3tcXeOuRX-b3222wlCPqZAmE7_MSp5DOyheM8xz6NnoCzhH0H2fr1bhAUkvq6WO2kY2gDCZD79_5_XP7H_BMsnknzfZksApYL5k5gCF76zvfZSbO7pngDFd1qrsNJA";
const YOUR_LINKEDIN_MEMBER_ID = ""
const shareOnLinkedIn = async () => {
  try {
 
    const imageFile = require("../../public/certificate/cer_img.jpg");
    const binaryImage = await getBinaryImage(imageFile);

    const uploadResponse = await axios.post(
      "https://api.linkedin.com/v2/assets?action=registerUpload",
      {
        registerUploadRequest: {
          recipes: ["urn:li:digitalmediaRecipe:feedshare-image"],
          owner: "urn:li:person:YOUR_LINKEDIN_MEMBER_ID", 
        },
      },
      {
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN", 
          "Content-Type": "application/json",
        },
      }
    );



    const asset = uploadResponse.data.value;

    await axios.put(asset.uploadMechanism[0].uploadUrl, binaryImage, {
      headers: {
        "Content-Type": asset.uploadMechanism[0].mediaType,
      },
    });



    const shareResponse = await axios.post(
      "https://api.linkedin.com/v2/ugcPosts",
      {
        author: `urn:li:person:YOUR_LINKEDIN_MEMBER_ID`, 
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: "Check out this image!", //img descrip
            },
            shareMediaCategory: "IMAGE",
            media: [
              {
                status: "READY",
                description: {
                  text: "Image description",
                },
                media: asset,
              },
            ],
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "CONNECTIONS",
        },
      },
      {
        headers: {
          Authorization: "Bearer YOUR_ACCESS_TOKEN", 
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Shared on LinkedIn:", shareResponse.data);
  } catch (error) {
    console.error("Error sharing on LinkedIn:", error);
  }
};

const getBinaryImage = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsBinaryString(file);
  });
};


export default shareOnLinkedIn;