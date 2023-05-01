import React from "react";
import { Button } from "./Button";
import { BsCalendarWeekFill } from 'react-icons/bs';

interface CardProps {
  date: string;
  title: string;
  subtitle: string;
}

const HeroCard: React.FC<CardProps> = ({ date, title, subtitle }) => {
  return (
    <div className="hero-card-container">
      <div className="hero-button-up">
        <Button
          type="pill-icon"
          text={
            <span>
              <BsCalendarWeekFill /> UPCOMING
            </span>
          }
        />
      </div>
      <div className="hero-text-container">
        <p>{date}</p>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className="hero-button-down">
        <Button type="rectangle" text="View Drop" />
      </div>
    </div>
  )
        }
    

        export default HeroCard;
