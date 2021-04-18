import React, {useState} from 'react';
import Dropzone from "react-dropzone";

const UploadFile = () => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleAcceptedFiles = files => {
        files.map(file => {
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
        });
        setSelectedFiles(files)
    };

    return (
        <Dropzone
            onDrop={acceptedFiles => handleAcceptedFiles(acceptedFiles)}
            multiple
        >
            {({ getRootProps, getInputProps }) => (
                <div className="dropzone">
                    <p className="Rectangle-title">
                        오프라인 매장 서비스 메뉴
                    </p>

                    {!selectedFiles[0]
                        ?
                        <div
                            className="Rectangle"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />

                            <img
                                className="Rectangle__iconnavcamera"
                                src="images/icon-nav-camera.svg"
                                alt="upload file zone"
                            />

                            <p className="Rectangle__content">오프라인 매장 서비스 메뉴 사진 (가격정보 포함)</p>
                        </div>
                        :
                        <div
                            className="Rectangle-preview"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            {selectedFiles.map(f => {
                                return (
                                    <img
                                        alt={f.name}
                                        src={f.preview}
                                    />
                                );
                            })}
                        </div>
                    }
                </div>
            )}
        </Dropzone>
    );
};

export default UploadFile;
