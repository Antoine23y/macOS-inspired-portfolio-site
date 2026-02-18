import {WindowControls} from "#components/index.js";
import WindowWrapper from "#hoc/windowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile?.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile"/>
                <h2 className="text-sm font-medium text-gray-700">{name}</h2>
            </div>

            <div className="bg-white h-full overflow-hidden flex items-center justify-center p-4 rounded-b-lg">
                <img 
                    src={imageUrl} 
                    alt={name} 
                    className="max-w-full max-h-full object-contain rounded shadow-sm"
                />
            </div>
        </>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
