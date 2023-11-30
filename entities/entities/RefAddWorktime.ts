import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ref_add_worktime", { schema: "data" })
export class RefAddWorktime {
  @PrimaryGeneratedColumn({ type: "int", name: "seq" })
  seq: number;

  @Column("int", { name: "ent_id", comment: "업체ID" })
  entId: number;

  @Column("int", { name: "mkey", comment: "기계 고유 키값 (svc_cnc.id)" })
  mkey: number;

  @Column("text", { name: "comment", nullable: true, comment: "주석(메모)" })
  comment: string | null;

  @Column("varchar", { name: "reg_emp_name", comment: "등록자명", length: 12 })
  regEmpName: string;

  @Column("timestamp", {
    name: "start_time",
    nullable: true,
    comment: "추가근로 시작시간",
  })
  startTime: Date | null;

  @Column("timestamp", {
    name: "end_time",
    nullable: true,
    comment: "추가근로 종료시간",
  })
  endTime: Date | null;

  @Column("timestamp", {
    name: "reg_date",
    comment: "등록일자",
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date;
}
