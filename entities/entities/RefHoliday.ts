import { Column, Entity } from "typeorm";

@Entity("ref_holiday", { schema: "data" })
export class RefHoliday {
  @Column("varchar", {
    primary: true,
    name: "holiday",
    comment: "공휴일",
    length: 10,
  })
  holiday: string;

  @Column("varchar", {
    name: "holiday_desc",
    comment: "공휴일상세",
    length: 40,
  })
  holidayDesc: string;

  @Column("varchar", { name: "day_week", comment: "요일", length: 4 })
  dayWeek: string;

  @Column("varchar", { name: "reg_emp_name", comment: "등록자명", length: 30 })
  regEmpName: string;

  @Column("timestamp", {
    name: "reg_date",
    comment: "등록일자",
    default: () => "CURRENT_TIMESTAMP",
  })
  regDate: Date;
}
