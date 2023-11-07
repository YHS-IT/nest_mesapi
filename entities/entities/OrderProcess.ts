import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_process", { schema: "data" })
export class OrderProcess {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "enterprise_id", nullable: true })
  enterpriseId: number | null;

  @Column("int", { name: "buyer_id", nullable: true })
  buyerId: number | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 100 })
  productName: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("date", { name: "plan_date", nullable: true })
  planDate: string | null;

  @Column("varchar", { name: "color", nullable: true, length: 10 })
  color: string | null;
}
