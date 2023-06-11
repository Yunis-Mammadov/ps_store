import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import InputBase from '@mui/material/InputBase';
import * as React from 'react';

const style = {
    position: 'absolute',
    top: '20%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: "8vh",
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: "flex",
    border: "none",
    alignItems: "center",
    padding: "0 10px"
};

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const [inputValue, setInputValue] = React.useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setInputValue("");
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleClearInput = (e) => {
        setInputValue("")
    }

    return (
        <div>
            <Button onClick={handleOpen}><SearchIcon /></Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <div style={{ position: 'relative', flex: 1 }}>
                            <InputBase
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    fontSize: "16px",
                                    paddingLeft: 1,
                                    paddingRight: inputValue ? '40px' : '15px',
                                    border: 'none'
                                }}
                                placeholder='Search PS Store'
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            {inputValue && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(-50%)',
                                        cursor: 'pointer'
                                    }}
                                    onClick={handleClearInput}
                                >
                                    <ClearIcon />
                                </div>
                            )}
                        </div>
                        <button
                            style={{
                                backgroundColor: "rgb(25,118,210)",
                                color: "white",
                                border: "none",
                                width: "80px",
                                height: "100%",
                                position: "relative",
                                left: "10px"
                            }}
                        >
                            <SearchIcon />
                        </button>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
