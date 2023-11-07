import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderManagement } from "./OrderManagement";

@Entity("order_buyer", { schema: "data" })
export class OrderBuyer {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "고객사명",
    length: 45,
  })
  name: string | null;

  @Column("int", { name: "ent", nullable: true, comment: "당사코드(업체코드)" })
  ent: number | null;

  @Column("varchar", {
    name: "manager",
    nullable: true,
    comment: "담당자",
    length: 45,
  })
  manager: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "담당자 연락처",
    length: 45,
  })
  phone: string | null;

  @OneToMany(() => OrderManagement, (orderManagement) => orderManagement.buyer)
  orderManagements: OrderManagement[];
}
