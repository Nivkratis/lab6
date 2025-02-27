var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
// Декоратор для блокировки изменений в классе
function SealedClass(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
function ToUpperCase(target, propertyKey, descriptor) {
    // Сохраняем оригинальную функцию
    var originalMethod = descriptor.value;
    // Изменяем дескриптор, чтобы новый метод выполнял преобразование
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase(); // Преобразуем строку в заглавные буквы
        }
        return result; // Возвращаем результат без изменений, если это не строка
    };
}
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentTypes["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocumentTypes["OSAGO"] = "\u041E\u0421\u0410\u0413\u041E";
})(DocumentTypes || (DocumentTypes = {}));
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["Convertible"] = "\u041A\u0430\u0431\u0440\u0438\u043E\u043B\u0435\u0442";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Premium"] = "\u041F\u0440\u0435\u043C\u0438\u0443\u043C";
})(CarClass || (CarClass = {}));
var OwnerClass = /** @class */ (function () {
    function OwnerClass(name, surname, patronymic, birthDate, documentType, documentSeries, documentNumber) {
        this._name = name;
        this._surname = surname;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }
    Object.defineProperty(OwnerClass.prototype, "name", {
        get: function () { return this._name; },
        set: function (value) { this.name = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "surname", {
        get: function () { return this._surname; },
        set: function (value) { this._surname = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "patronymic", {
        get: function () { return this._patronymic; },
        set: function (value) { this._patronymic = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "birthDate", {
        get: function () { return this._birthDate; },
        set: function (value) { this._birthDate = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentType", {
        get: function () { return this._documentType; },
        set: function (value) { this._documentType = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentSeries", {
        get: function () { return this._documentSeries; },
        set: function (value) { this._documentSeries = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OwnerClass.prototype, "documentNumber", {
        get: function () { return this._documentNumber; },
        set: function (value) { this._documentNumber = value; },
        enumerable: false,
        configurable: true
    });
    OwnerClass.prototype.displayOwnerInfo = function () {
        console.log("Информация о владельце:");
        console.log("ФИО: " + this.surname + " " + this.name + " " + this.patronymic);
        console.log("Дата рождения:" + this.birthDate);
        console.log("Тип документа: " + this.documentType);
        console.log("Серия документа: " + this.documentSeries.toString());
        console.log("Номер документа: " + this.documentNumber.toString());
    };
    return OwnerClass;
}());
var Car = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _getCarInfo_decorators;
    return _a = /** @class */ (function () {
            function Car(mark, model, yearOfManufacture, vin, registrationNumber, owner, bodyType, carClass) {
                this._mark = __runInitializers(this, _instanceExtraInitializers);
                this._mark = mark;
                this._model = model;
                this._yearOfManufacture = yearOfManufacture;
                this._vin = vin;
                this._registrationNumber = registrationNumber;
                this._owner = owner;
                this._bodyType = bodyType;
                this._carClass = carClass;
            }
            Object.defineProperty(Car.prototype, "mark", {
                get: function () { return this._mark; },
                set: function (value) { this._mark = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "model", {
                get: function () { return this._model; },
                set: function (value) { this._model = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "yearOfManufacture", {
                get: function () { return this._yearOfManufacture; },
                set: function (value) { this._yearOfManufacture = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "vin", {
                get: function () { return this._vin; },
                set: function (value) { this._vin = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "registrationNumber", {
                get: function () { return this._registrationNumber; },
                set: function (value) { this._registrationNumber = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "owner", {
                get: function () { return this._owner; },
                set: function (value) { this._owner = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "bodyType", {
                get: function () { return this._bodyType; },
                set: function (value) { this._bodyType = value; },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(Car.prototype, "carClass", {
                get: function () { return this._carClass; },
                set: function (value) { this._carClass = value; },
                enumerable: false,
                configurable: true
            });
            Car.prototype.displayVehicleWithoutOwner = function () {
                console.log("Информация об автомобиле:");
                console.log("Марка: " + this.mark);
                console.log("Модель: " + this.model);
                console.log("Год выпуска: " + this._yearOfManufacture.toString());
                console.log("VIN-номер: " + this.vin);
                console.log("Регистрационный номер: " + this.registrationNumber);
                console.log("Тип кузова: " + this.bodyType);
                console.log("Класс автомобиля: " + this.carClass);
            };
            Car.prototype.getCarInfo = function () {
                return "\u041C\u0430\u0440\u043A\u0430: ".concat(this._mark, ", \u041C\u043E\u0434\u0435\u043B\u044C: ").concat(this._model);
            };
            return Car;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getCarInfo_decorators = [ToUpperCase];
            __esDecorate(_a, null, _getCarInfo_decorators, { kind: "method", name: "getCarInfo", static: false, private: false, access: { has: function (obj) { return "getCarInfo" in obj; }, get: function (obj) { return obj.getCarInfo; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var ownerOne = new OwnerClass("Иван", "Иванов", "Иванович", "05.04.2005", DocumentTypes.Passport, 1234, 567890);
var car = new Car("BMW", "X5", 2021, "WBA1234567890VIN1", "М456ОР77", ownerOne, BodyType.SUV, CarClass.Premium);
//Object.defineProperty(Car, "Color", {
//value: "Black"
//});
// Проверка метода с декоратором
console.log(car.getCarInfo()); // Все буквы в верхнем регистре
