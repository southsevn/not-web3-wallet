import { FC } from "react";

interface SnackbarProps {
    message: string;
}

const Snackbar: FC<SnackbarProps> = ({ message }) => {
    return (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
            {message}
        </div>
    );
}

export default Snackbar;