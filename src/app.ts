import express, { Application } from 'express';
import students from './routes/students';
import schoolServices from './routes/schoolServices';
import teachingServices from './routes/teachingServices';
export default (app: Application)=>{
    app.use('/api',students);
    app.use('/api',schoolServices);
    app.use('/api',teachingServices);
}