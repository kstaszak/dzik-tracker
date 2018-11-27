using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DzikTracker.Contract.Entities.DataModel
{
    [Serializable]
    [Table("View_LastTrainings")]
    public class LastTrainings
    {
        [Key]
        public int Id { get; set; }
        public string GroupName { get; set; }
        public string ExcerciseName { get; set; }
        public DateTime TrainingDate { get; set; }
        public string Details { get; set; }
    }
}
