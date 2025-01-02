import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 24, // Tăng thêm khoảng cách dưới nếu cần
        backgroundColor: '#4CAF50',
    },
    backButton: {
        marginRight: 12,
        marginTop: 4,
    },
    headerContent: {
        flex: 1, // Để chiếm toàn bộ chiều ngang
        flexDirection: 'column', // Bố cục theo cột
    },
    headerText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        marginBottom: 8, // Tạo khoảng cách dưới dòng "Shopping Cart"
    },
    subHeader: {
        fontSize: 13,
        color: 'white',
        alignSelf: 'flex-end', // Căn sang bên phải
        opacity: 0.9,
    },
    cartContent: {
        flex: 1,
        padding: 16,
    },
    itemCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 8,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    itemImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 12,
    },
    itemInfo: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    itemPrice: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    quantityButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        fontSize: 18,
        color: '#333',
        lineHeight: 22,
    },
    quantity: {
        fontSize: 16,
        fontWeight: '500',
        minWidth: 24,
        textAlign: 'center',
    },
    //   totalContainer: {
    //     paddingHorizontal: 16,
    //     paddingVertical: 12,
    //     backgroundColor: 'white',
    //     borderTopWidth: 1,
    //     borderTopColor: '#EAEAEA',
    //   },
    totalText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#333',
    },
    continueButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        borderRadius: 100,
        marginVertical: 15,
        width: '90%',
        alignSelf: 'center',
    },
    continueButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6FFE4',
        paddingVertical: 10,
        borderRadius: 100,
        marginVertical: 15,
        width: '90%',
        alignSelf: 'center'
    },

});