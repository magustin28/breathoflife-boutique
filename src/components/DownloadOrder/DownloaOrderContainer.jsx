import propTypes from "prop-types";
import DownloaOrder from "./DownloaOrder";
import { PDFDownloadLink } from "@react-pdf/renderer";

function DownloaOrderContainer({ order }) {
  return (
    <div>
      <PDFDownloadLink document={<DownloaOrder order={order} />} fileName={`order${order.id}.pdf`}>
        <button className="btn btn-success">Descargar Orden</button>
      </PDFDownloadLink>
    </div>
  );
}

DownloaOrderContainer.propTypes = {
  order: propTypes.object.isRequired,
};

export default DownloaOrderContainer;
