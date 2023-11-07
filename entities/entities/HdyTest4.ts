import {Column,Entity} from "typeorm";


@Entity("hdy_test4" ,{schema:"data" } )
export  class HdyTest4 {

@Column("date",{ name:"report_date",nullable:true })
reportDate:string | null;

@Column("bigint",{ name:"ent_id",nullable:true })
entId:string | null;

@Column("int",{ name:"mkey",nullable:true,comment:"기계 고유ID값 (svc_cnc.id 값이 들어감)",default: () => "'-1'", })
mkey:number | null;

@Column("int",{ name:"lot",nullable:true,comment:"생산 로트" })
lot:number | null;

@Column("varchar",{ name:"집계 대상 업체",nullable:true,length:255 })
:string | null;

@Column("varchar",{ name:"ent_code",comment:"회사명",length:40 })
entCode:string;

@Column("datetime",{ name:"집계 시작일시",nullable:true })
:Date | null;

@Column("datetime",{ name:"집계 종료일시",nullable:true })
:Date | null;

@Column("varchar",{ name:"mid",comment:"장비ID",length:45 })
mid:string;

@Column("varchar",{ name:"machine_no",nullable:true,length:20 })
machineNo:string | null;

@Column("varchar",{ name:"program",comment:"가공프로그램",length:100 })
program:string;

@Column("timestamp",{ name:"조업 시작",nullable:true,comment:"단일갯수 가공 시작 시간" })
:Date | null;

@Column("timestamp",{ name:"조업 종료",nullable:true,comment:"단일갯수 가공 종료 시간" })
:Date | null;

@Column("time",{ name:"조업중 총 휴게시간",nullable:true })
:string | null;

@Column("time",{ name:"집계 단위조업시간",nullable:true })
:string | null;

@Column("time",{ name:"집계 단위부하시간",nullable:true })
:string | null;

@Column("time",{ name:"표준 조업시간",nullable:true })
:string | null;

@Column("time",{ name:"표준 부하시간",nullable:true })
:string | null;

@Column("time",{ name:"실 조업시간",nullable:true })
:string | null;

@Column("time",{ name:"실 부하시간",nullable:true })
:string | null;

@Column("time",{ name:"실 가공시간",nullable:true })
:string | null;

@Column("time",{ name:"집계 단위조업 대비 비가동시간",nullable:true })
:string | null;

@Column("time",{ name:"집계 단위부하 대비 비가동시간",nullable:true })
:string | null;

@Column("time",{ name:"표준 조업 대비 비가동시간",nullable:true })
:string | null;

@Column("time",{ name:"표준 부하 대비 비가동시간",nullable:true })
:string | null;

@Column("time",{ name:"실 조업 대비 비가동시간",nullable:true })
:string | null;

@Column("time",{ name:"실 부하 대비 비가동시간",nullable:true })
:string | null;

@Column("decimal",{ name:"집계 단위조업시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("decimal",{ name:"집계 단위부하시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("decimal",{ name:"표준 조업시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("decimal",{ name:"표준 부하시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("decimal",{ name:"실 조업시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("decimal",{ name:"실 부하시간 대비 가동율",nullable:true,precision:15,scale:2 })
:string | null;

@Column("time",{ name:"평균 가공시간",nullable:true })
:string | null;

@Column("time",{ name:"평균 실가공시간",nullable:true })
:string | null;

@Column("time",{ name:"평균 준비교체시간",nullable:true })
:string | null;

@Column("time",{ name:"평균 가공중 대기시간",nullable:true })
:string | null;

@Column("time",{ name:"실 Cycle Time",nullable:true })
cycleTime:string | null;

@Column("bigint",{ name:"가공개수",default: () => "'0'", })
:string;

}
