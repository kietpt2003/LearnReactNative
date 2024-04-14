import { View, Text, StyleSheet, SectionList, TouchableHighlight, FlatList, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'

const menuItemsToDisplay = [
    {
        title: 'Appetizers',
        data: [
            {
                name: 'Hummus',
                price: '$5.00'
            },
            {
                name: 'Moutabal',
                price: '$5.00'
            },
            {
                name: 'Falafel',
                price: '$7.50'
            },
            {
                name: 'Marinated Olives',
                price: '$5.00'
            },
            {
                name: 'Kofta',
                price: '$5.00'
            },
            {
                name: 'Eggplant Salad',
                price: '$8.50'
            },
        ]
    },
    {
        title: 'Main Dishes',
        data: [
            {
                name: 'Lentil Burger',
                price: '$10.00'
            },
            {
                name: 'Smoked Salmon',
                price: '$14.00'
            },
            {
                name: 'Kofta Burger',
                price: '$11.00'
            },
            {
                name: 'Turkish Kebab',
                price: '$15.50'
            },
        ]
    },
    {
        title: 'Sides',
        data: [
            {
                name: 'Fries',
                price: '$3.00',
                id: '11k',
            },
            {
                name: 'Buttered Rice',
                price: '$3.00'
            },
            {
                name: 'Bread Sticks',
                price: '$3.00'
            },
            {
                name: 'Pita Pocket',
                price: '$3.00'
            },
            {
                name: 'Lentil Soup',
                price: '$3.75'
            },
            {
                name: 'Greek Salad',
                price: '$6.00'
            },
            {
                name: 'Rice Pilaf',
                price: '$4.00'
            },
        ]
    },
    {
        title: 'Desserts',
        data: [
            {
                name: 'Maklava',
                price: '$3.00'
            },
            {
                name: 'Tartufo',
                price: '$3.00'
            },
            {
                name: 'Tiramisu',
                price: '$5.00'
            },
            {
                name: 'Panna Cotta',
                price: '$5.00'
            },
        ]
    },
]

const Item = ({ item, index, separators }) => (
    <TouchableHighlight
        key={index}
        onPress={() => alert(`${index} - ${item.name} - ${item.price}`)}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}>
        <View style={menuStyles.innerContainer}>
            <Text style={menuStyles.itemText}>{item.name}</Text>
            <Text style={menuStyles.itemText}>{item.price}</Text>
        </View>
    </TouchableHighlight>
)

const TestItem = ({ item, renderItem, renderSectionHeader }) => {
    const [isOpened, setOpen] = useState(true);
    return (
        <>
            <Button
                onPress={() => setOpen(!isOpened)}
                title={item.title}
                color="#EE9972"
                accessibilityLabel="Learn more about this purple button"
            />
            {
                isOpened &&
                <SectionList
                    sections={menuItemsToDisplay}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                // renderSectionHeader={renderSectionHeader}
                />
            }
        </>
    )

}
const TestList = () => {

    const renderItem = ({ item, index, separators }) => <Item item={item} index={index} separators={separators} />;

    const renderSectionHeader = ({ section: { title } }) => (
        <View style={menuStyles.headerStyle}>
            <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
    )

    return (
        <ScrollView
            style={{ flex: 1 }}
        // showsVerticalScrollIndicator={false}
        >
            <View style={menuStyles.container}>
                {menuItemsToDisplay.map((item, index) => (
                    <TestItem item={item} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
                ))}
            </View>
        </ScrollView>
    )
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        color: '#F4CE14',
        fontSize: 20,
    },
    headerStyle: {
        backgroundColor: '#EE9972',
    },
    sectionHeader: {
        color: 'black',
        fontSize: 26,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});

export default TestList