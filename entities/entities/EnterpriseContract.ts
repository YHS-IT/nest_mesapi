import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("enterprise_contract", { schema: "data" })
export class EnterpriseContract {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("int", { name: "ent_id", nullable: true })
  entId: number | null;

  @Column("date", { name: "start_date", nullable: true })
  startDate: string | null;

  @Column("date", { name: "end_date", nullable: true })
  endDate: string | null;

  @Column("date", { name: "pay_date", nullable: true })
  payDate: string | null;

  @Column("varchar", { name: "line_type", nullable: true, length: 10 })
  lineType: string | null;

  @Column("varchar", { name: "contract_type", nullable: true, length: 10 })
  contractType: string | null;

  @Column("varchar", {
    name: "contract_cert_path",
    nullable: true,
    length: 100,
  })
  contractCertPath: string | null;

  @Column("varchar", { name: "comment", nullable: true, length: 100 })
  comment: string | null;
}
