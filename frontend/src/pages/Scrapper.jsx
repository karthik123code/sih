import { Button } from "../components/Button"
import axios from "axios"


export const Scrapper = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/instagram/download', {
                responseType: 'blob',  // Important for handling binary data
            });

            // Create a URL for the file and trigger a download
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'instagram_profile_data.docx');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading the file:', error.response.data.error);
        }
    };

    return (
        <button onClick={handleDownload}>Download DOCX</button>
    );


    // return (
    //     <div className="bg-gray-800 h-screen flex justify-center border border-white ">
    //         <div className="pt-5">
    //             <Button onClick={async () => {
    //                 const response = await axios.get("http://127.0.0.1:5000/instagram/download")
    //                 console.log(response)
    //             }} label={"Download"} />
    //         </div>
            
    //     </div>
    // )
}