import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ref_std_worktime", { schema: "data" })
export class RefStdWorktime {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "ent_id", comment: "회사 ID" })
  entId: number;

  @Column("varchar", {
    name: "time_mng_type_cd",
    comment: "시간관리유형코드",
    length: 3,
  })
  timeMngTypeCd: string;

  @Column("varchar", { name: "start_time", comment: "시작시간", length: 8 })
  startTime: string;

  @Column("varchar", { name: "end_time", comment: "종료시간", length: 8 })
  endTime: string;

  @Column("varchar", { name: "description", length: 10 })
  description: string;

  @Column("varchar", {
    name: "reg_emp_name",
    nullable: true,
    comment: "등록자명",
    length: 12,
  })
  regEmpName: string | null;

  @Column("timestamp", {
    name: "reg_date",
    nullable: true,
    comment: "등록일자",
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date | null;
}
