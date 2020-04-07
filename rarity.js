const brands = [
    {
        name: "Acer",
        value: 6
    },
    {
        name: "Apple",
        value: 7
    },
    {
        name: "Hp",
        value: 6
    },
    {
        name: "Peaq",
        value: 4
    }
]

const rarityMap = [
    {
        value: "Geen Waarde",
        min: 0,
        max: 10
    },
    {
        value: "Gewoon",
        min: 10,
        max: 25
    },
    {
        value: "Zeldzaam",
        min: 25,
        max: 35
    },
    {
        value: "Zeer Zeldzaam",
        min: 35
    }
]

function RetrieveBrandValue(brandName)
{
    for(const brand of brands)
    {
        if(brand.name != brandName) continue;
        return brand.value;
    }
    return 5;
} 


function CalculateRarity(brandName, years, isLimitedEdition)
{
    const limitedEditionValue = isLimitedEdition ? 5 : 0;
    return RetrieveBrandValue(brandName) * years * 0.1 + limitedEditionValue;
}


function RetrieveRarity(rarityValue)
{
    for(const rarity of rarityMap)
    {
        if(!("min" in rarity) && "max" in rarity)
        {
            if(rarityValue < rarity.max)
                return rarity.value;
        }
        if("min" in rarity && "max" in rarity)
        {
            if(rarityValue > rarity.min && rarityValue < rarity.max)
                return rarity.value;
        }
        if (!("max" in rarity ) && "min" in rarity)
        {
            if(rarityValue > rarity.min)
                return rarity.value;
        }
    }
}

function OnCalculateSubmit()
{
    const selectBrandElement = document.getElementById("brands");
    const selectedBrand = selectBrandElement.options.item(selectBrandElement.options.selectedIndex);
    const selectYearElement = document.getElementById("Years");
    const selectedYear = selectYearElement.value;
    console.log()

}
console.log(RetrieveRarity(CalculateRarity("Acer", 5, true)))