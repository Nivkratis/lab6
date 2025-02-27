
function SealedClass(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function ToUpperCase(method: Function) {
    return function (this: any, ...args: any[]) {
        const result = method.apply(this, args);
        return result.toUpperCase();
    }
}




interface Owner {
    name: string;
    surname: string;
    patronymic: string;
    birthDate: string;
    documentType: DocumentTypes;
    documentSeries: number;
    documentNumber: number;

    displayOwnerInfo(): void;
}

enum DocumentTypes {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    OSAGO = "ОСАГО",
}

interface Vehicle {
    mark: string;
    model: string;
    yearOfManufacture: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;

    displayVehicleWithoutOwner(): void;
}

interface Car extends Vehicle {
    bodyTypes: BodyType;
    carClasses: CarClass;
    displayVehicleWithoutOwner(): void;
}

enum BodyType {
    Sedan = "Седан",
    Hatchback = "Хэтчбек",
    SUV = "Внедорожник",
    Coupe = "Купе",
    Convertible = "Кабриолет",
}

enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Premium = "Премиум",
}

class OwnerClass implements Owner {
    private _name: string;
    private _surname: string;
    private _patronymic: string;
    private _birthDate: string;
    private _documentType: DocumentTypes;
    private _documentSeries: number;
    private _documentNumber: number;

    constructor(
        name: string,
        surname: string,
        patronymic: string,
        birthDate: string,
        documentType: DocumentTypes,
        documentSeries: number,
        documentNumber: number
    ) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }


    get name(): string { return this._name; }
    set name(value: string) { this.name = value; }

    get surname(): string { return this._surname; }
    set surname(value: string) { this._surname = value }

    get patronymic(): string { return this._patronymic; }
    set patronymic(value: string) { this._patronymic = value; }

    get birthDate(): string { return this._birthDate; }
    set birthDate(value: string) { this._birthDate = value; }

    get documentType(): DocumentTypes { return this._documentType; }
    set documentType(value: DocumentTypes) { this._documentType = value; }

    get documentSeries(): number { return this._documentSeries; }
    set documentSeries(value: number) { this._documentSeries = value; }

    get documentNumber(): number { return this._documentNumber; }
    set documentNumber(value: number) { this._documentNumber = value; }

    displayOwnerInfo(): void {
        console.log("Информация о владельце:");
        console.log("ФИО: " + this.surname + " " + this.name + " " + this.patronymic);
        console.log("Дата рождения:" + this.birthDate);
        console.log("Тип документа: " + this.documentType);
        console.log("Серия документа: " + this.documentSeries.toString());
        console.log("Номер документа: " + this.documentNumber.toString());
    }
}

class Car implements Car {
    private _mark: string;
    private _model: string;
    private _yearOfManufacture: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carClass: CarClass;


    constructor(
        mark: string,
        model: string,
        yearOfManufacture: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        this._mark = mark;
        this._model = model;
        this._yearOfManufacture = yearOfManufacture;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    get mark(): string { return this._mark; }
    set mark(value: string) { this._mark = value; }

    get model(): string { return this._model; }
    set model(value: string) { this._model = value; }

    get yearOfManufacture(): number { return this._yearOfManufacture; }
    set yearOfManufacture(value: number) { this._yearOfManufacture = value; }

    get vin(): string { return this._vin; }
    set vin(value: string) { this._vin = value; }

    get registrationNumber(): string { return this._registrationNumber; }
    set registrationNumber(value: string) { this._registrationNumber = value; }

    get owner(): Owner { return this._owner; }
    set owner(value: Owner) { this._owner = value; }

    get bodyType(): BodyType { return this._bodyType; }
    set bodyType(value: BodyType) { this._bodyType = value; }

    get carClass(): CarClass { return this._carClass; }
    set carClass(value: CarClass) { this._carClass = value; }

    displayVehicleWithoutOwner(): void {
        console.log("Информация об автомобиле:");
        console.log("Марка: " + this.mark);
        console.log("Модель: " + this.model);
        console.log("Год выпуска: " + this._yearOfManufacture.toString());
        console.log("VIN-номер: " + this.vin);
        console.log("Регистрационный номер: " + this.registrationNumber);
        console.log("Тип кузова: " + this.bodyType);
        console.log("Класс автомобиля: " + this.carClass);
    }
   
    @ToUpperCase
    getCarInfo(): string {
        return `Марка: ${this._mark}, Модель: ${this._model}`;
    }
}



const ownerOne = new OwnerClass(
    "Иван",
    "Иванов",
    "Иванович",
    "05.04.2005",
    DocumentTypes.Passport,
    1234,
    567890
);


const car = new Car(
    "BMW",
    "X5",
    2021,
    "WBA1234567890VIN1",
    "М456ОР77",
    ownerOne,
    BodyType.SUV,
    CarClass.Premium
);



//Object.defineProperty(Car, "Color", { Выдаст ошибку
//value: "Black"
//});

console.log(car.getCarInfo()); 
