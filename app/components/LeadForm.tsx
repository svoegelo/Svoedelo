// app/components/LeadForm.tsx
'use client';

import { useState } from 'react';

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setIsSuccess(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSuccess(false), 3000);
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch (err) {
      console.error(err);
      alert('Не удалось отправить заявку.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#4A5D5E] text-[#F8F8EC] p-8 rounded-xl max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">Хотите узнать свою цену?</h3>
      <p className="mb-6">Заполните короткую форму — рассчитаем за 10 минут.</p>

      {isSuccess ? (
        <div className="bg-[#F8F8EC] text-[#4A5D5E] py-3 px-6 rounded-lg text-center">
          Спасибо! Мы скоро свяжемся с вами.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="businessType"
            placeholder="Вид деятельности"
            className="w-full p-3 rounded-lg"
            required
          />
          <input
            type="number"
            name="employees"
            placeholder="Число сотрудников"
            className="w-full p-3 rounded-lg"
            required
          />
          <input
            type="text"
            name="turnover"
            placeholder="Примерный оборот"
            className="w-full p-3 rounded-lg"
            required
          />
          <textarea
            name="needs"
            placeholder="Особые пожелания"
            className="w-full p-3 rounded-lg"
            rows={2}
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#F8F8EC] text-[#4A5D5E] font-bold py-3 px-8 rounded-lg hover:bg-[#e0e0d0] transition w-full"
          >
            {isSubmitting ? 'Отправка...' : 'Рассчитать стоимость'}
          </button>
        </form>
      )}
    </div>
  );
}