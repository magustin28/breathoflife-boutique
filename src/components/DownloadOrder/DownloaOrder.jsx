import propTypes from "prop-types";
import { formatCurrency, formatCurrencyWithoutDecimal } from "../../assets/utils";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 50,
    paddingLeft: 45,
    paddingRight: 45,
  },
  header: {
    marginBottom: 20,
    textAlign: "center",
  },
  titleOrder: {
    fontSize: 20,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  sectionBuyer: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  titleBuyer: {
    textDecoration: "underline",
  },
  dataBuyer: {
    marginTop: 5,
    marginBottom: 5,
  },
  sectionItems: {
    marginTop: 20,
    marginBottom: 20,
  },
  titleItems: {
    textDecoration: "underline",
    marginBottom: 20,
  },
  item: {
    marginTop: 5,
    marginBottom: 5,
  },
  sectionTotal: {
    marginTop: 10,
  },
  titleTotal: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

function DownloaOrder({ order }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.titleOrder}>Orden de compra #{order.id}</Text>
        </View>
        <View style={styles.sectionBuyer}>
          <Text style={styles.titleBuyer}>Datos del comprador:</Text>
          <Text>Fecha de Compra: {order.date ? order.date.toLocaleDateString() : "Fecha no disponible"}</Text>
        </View>
        <View>
          <Text style={styles.dataBuyer}>Comprador: {order?.buyer?.name}</Text>
          <Text style={styles.dataBuyer}>Email: {order?.buyer?.email}</Text>
          <Text style={styles.dataBuyer}>Teléfono: {order?.buyer?.phone}</Text>
          <Text style={styles.dataBuyer}>Forma de pago: {order.paymentMethods}</Text>
          <Text style={styles.dataBuyer}>
            Envío: {typeof order.shippingCost !== "number" ? order.shippingCost : formatCurrency(order.shippingCost)}
          </Text>
        </View>
        <View style={styles.sectionItems}>
          <Text style={styles.titleItems}>Detalle de la compra:</Text>
          {order.items.map((product) => (
            <Text key={product.id} style={styles.item}>
              ~ {product.name} (c/u {formatCurrencyWithoutDecimal(product.price)}) X {product.quantity}{" "}
              {product.quantity === 1 ? `unidad` : `unidades`}
            </Text>
          ))}
        </View>
        <View style={styles.sectionTotal}>
          <Text style={styles.titleTotal}>Total: {formatCurrency(order.total)}</Text>
        </View>
      </Page>
    </Document>
  );
}

DownloaOrder.propTypes = {
  order: propTypes.object.isRequired,
};

export default DownloaOrder;
