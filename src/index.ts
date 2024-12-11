class Customer {
    public name: string;
    public address: string;
  
    constructor(name: string, address: string) {
      this.name = name;
      this.address = address;
    }
  }
  
  class Item {
    private shippingWeight: number;
    private description: string;
  
    constructor(shippingWeight: number, description: string) {
      this.shippingWeight = shippingWeight;
      this.description = description;
    }
  
    public getPriceForQuantity(): number {
      return 0;
    }
  
    public getTax(): number {
      return 0;
    }
  
    public inStock(): boolean {
      return false;
    }
  }
  
  class OrderDetail {
    private quantity: number;
    private taxStatus: string;
  
    constructor(quantity: number, taxStatus: string) {
      this.quantity = quantity;
      this.taxStatus = taxStatus;
    }
  
    public calcSubTotal(): number {
      return 0;
    }
  
    public calcWeight(): number {
      return 0;
    }
  
    public calcTax(): number {
      return 0;
    }
  }
  
  class Order {
    public date: string; 
    public status: string;
    private orderDetails: OrderDetail[] = [];
  
    constructor(date: string, status: string) {
      this.date = date;
      this.status = status;
    }
  
    public calcSubTotal(): number {
      return 0;
    }
  
    public calcTax(): number {
      return 0;
    }
  
    public calcTotal(): number {
      return 0;
    }
  
    public calcTotalWeight(): number {
      return 0;
    }
  
    public addOrderDetail(orderDetail: OrderDetail): void {
      this.orderDetails.push(orderDetail);
    }
  }
  
  abstract class Payment {
    protected amount: number;
  
    constructor(amount: number) {
      this.amount = amount;
    }
  
    public abstract authorized(): boolean;
  }
  
  class Cash extends Payment {
    private cashTendered: number;
  
    constructor(amount: number, cashTendered: number) {
      super(amount);
      this.cashTendered = cashTendered;
    }
  
    public authorized(): boolean {
      return true;
    }
  }
  
  class Check extends Payment {
    private name: string;
    private bankID: string;
  
    constructor(amount: number, name: string, bankID: string) {
      super(amount);
      this.name = name;
      this.bankID = bankID;
    }
  
    public authorized(): boolean {
      return true;
    }
  }
  
  class Credit extends Payment {
    private number: string;
    private type: string;
    private expDate: string; // เปลี่ยนจาก Date เป็น string
  
    constructor(amount: number, number: string, type: string, expDate: string) {
      super(amount);
      this.number = number;
      this.type = type;
      this.expDate = expDate;
    }
  
    public authorized(): boolean {
      return true;
    }
  }