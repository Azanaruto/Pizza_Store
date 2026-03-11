import { Modal, Box, Button } from "@mui/material";
import { pizzaStore } from "../../Zustand/Pizza_Store";
import styles from "./Modal.module.scss";
import ModalCart from "./ModalCart";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 950,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};

const Modals = () => {
  const { modal, toggleModal, selectElem, isSelectedIngident,toggleForm } = pizzaStore();
  const priceIngridents =
    isSelectedIngident.length >= 1
      ? isSelectedIngident.reduce((sum, elem) => sum + +elem.price, 0)
      : null;
  return (
    <Modal
      open={modal}
      onClose={toggleModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        },
      }}
    >
      <Box
        sx={{
          ...style,
          maxWidthwidth: 1000,
          height: 500,
          display: "flex",
          gap: "50",
        }}
      >
        <img src={selectElem?.image} alt="" />
        <div className={styles.text}>
          <h3 className={styles.title}>{selectElem?.title}</h3>
          <p className={styles.desc}>{selectElem?.desc}</p>
          <p className={styles.subtitle}>Добавит по вкусу </p>
          {selectElem?.desc && <ModalCart />}
          <Button sx={{ marginTop: 10 }} variant="contained" color="success" onClick={toggleForm}>
            Заказать {" "}
            {priceIngridents
              ? (selectElem?.price ? +selectElem?.price: 0 ) + priceIngridents
              : selectElem?.price}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Modals;
