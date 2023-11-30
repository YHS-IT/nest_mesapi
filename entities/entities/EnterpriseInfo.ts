import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("enterprise_info", { schema: "data" })
export class EnterpriseInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("int", { name: "ent_id", nullable: true })
  entId: number | null;

  @Column("int", { name: "business_num", nullable: true })
  businessNum: number | null;

  @Column("varchar", { name: "CEO", nullable: true, length: 6 })
  ceo: string | null;

  @Column("varchar", { name: "image_path", nullable: true, length: 50 })
  imagePath: string | null;

  @Column("varchar", { name: "ent_tel", nullable: true, length: 11 })
  entTel: string | null;

  @Column("varchar", { name: "email", nullable: true, length: 30 })
  email: string | null;

  @Column("varchar", { name: "ent_address", nullable: true, length: 50 })
  entAddress: string | null;

  @Column("int", { name: "address_num", nullable: true })
  addressNum: number | null;

  @Column("varchar", {
    name: "business_cert_path",
    nullable: true,
    length: 100,
  })
  businessCertPath: string | null;

  @Column("varchar", { name: "manager", nullable: true, length: 10 })
  manager: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 15 })
  phone: string | null;

  @Column("int", { name: "sms", nullable: true, default: () => "'0'" })
  sms: number | null;
}
