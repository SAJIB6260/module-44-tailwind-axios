import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": 30.00,
          "features": [
            "Unlimited gym access during regular hours",
            "Unlimited gym access during regular hours",
            "Unlimited gym access during regular hours",
            "Access to cardio and weight equipment",
            "Unlimited gym access during regular hours",
            "Locker room access",
            "Personalized fitness assessment"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": 50.00,
          "features": [
            "Unlimited gym access during regular hours",
            "All Basic Membership features",
            "Access to group fitness classes (yoga, spin, Zumba, etc.)",
            "Priority access to personal trainers",
            "Nutritional counseling session"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": 80.00,
          "features": [
            "Unlimited gym access during regular hours",
            "Unlimited gym access during regular hours",
            "All Premium Membership features",
            "Access for two adults and up to two children",
            "Family-friendly fitness classes",
            "Childcare services"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": 25.00,
          "features": [
            "Access to cardio and weight equipment",
            "Unlimited gym access during regular hours",
            "Valid student ID required",
            "Locker room access"
          ]
        }
      ];

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;