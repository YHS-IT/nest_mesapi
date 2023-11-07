import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderBuyer } from "./OrderBuyer";

@Index("buyer_id", ["buyerId"], {})
@Entity("order_management", { schema: "data" })
export class OrderManagement {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "buyer_id", nullable: true })
  buyerId: number | null;

  @Column("varchar", { name: "product_name", nullable: true, length: 45 })
  productName: string | null;

  @Column("date", { name: "due_date", nullable: true })
  dueDate: string | null;

  @Column("int", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("int", { name: "estimated_active_time", nullable: true })
  estimatedActiveTime: number | null;

  @Column("int", { name: "estimated_setting_time", nullable: true })
  estimatedSettingTime: number | null;

  @Column("timestamp", { name: "estimated_end", nullable: true })
  estimatedEnd: Date | null;

  @Column("timestamp", { name: "estimated_start", nullable: true })
  estimatedStart: Date | null;

  @Column("int", { name: "enterprise_id", nullable: true })
  enterpriseId: number | null;

  @Column("int", { name: "estimated_quantity", nullable: true })
  estimatedQuantity: number | null;

  @Column("int", { name: "estimated_mkey", nullable: true })
  estimatedMkey: number | null;

  @ManyToOne(() => OrderBuyer, (orderBuyer) => orderBuyer.orderManagements, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "buyer_id", referencedColumnName: "id" }])
  buyer: OrderBuyer;
}
