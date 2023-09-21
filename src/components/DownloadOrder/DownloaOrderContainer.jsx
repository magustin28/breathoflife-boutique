import PropTypes from "prop-types";
import DownloaOrder from "./DownloaOrder";
import { PDFDownloadLink } from "@react-pdf/renderer";

function DownloaOrderContainer({ order }) {
  return (
    <PDFDownloadLink document={<DownloaOrder order={order} />} fileName={`order_${order.id}.pdf`}>
      <button className="btn btn-success">Descargar Orden</button>
    </PDFDownloadLink>
  );
}

DownloaOrderContainer.propTypes = {
  order: PropTypes.object.isRequired,
};

export default DownloaOrderContainer;
