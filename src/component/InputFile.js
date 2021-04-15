import React, {useState} from 'react';
import Dropzone from 'react-dropzone';


const Input = () => {

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
        <div className="input-file">

                <div className="input-file__title">
                    Input File
                </div>


                <form>
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
                                            className="iconnavcamera"
                                            src="images/icon-nav-camera.svg"
                                        />

                                        <p className="content">오프라인 매장 서비스 메뉴 사진 (가격정보 포함)</p>
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
                </form>


                <p className="input-file__content">
                    - 매장 내 서비스 메뉴판으로 실제 매장내 비치 된 사진을 촬영해주세요. <br/>
                    - 가격 정보가 잘 나타날 수 있도록 촬영해주세요. <br/>
                    - 메뉴 정보 혹은 가격 정보가 보이지 않으면 가입 승인 미달될 수 있습니다.
                    (미달 시 가격 정보와 애프터 뷰 정보는 소비자에게 노출되지 않습니다.)

                </p>
        </div>
    );
};

export default Input;
