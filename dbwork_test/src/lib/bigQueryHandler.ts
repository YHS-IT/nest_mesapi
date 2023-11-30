import { BigQuery } from '@google-cloud/bigquery';
import { EventEmitter2 } from '@nestjs/event-emitter';

const { BQ_SCHEMA, BQ_TABLE } = process.env ;
const bigquery = new BigQuery();
let bq: Date | undefined ; 

export let bigQueryHandler = (data) =>{
  console.log(data);
}