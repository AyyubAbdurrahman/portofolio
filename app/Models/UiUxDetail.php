<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UiUxDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_id', 'type', 'title', 'content', 'file_path'
    ];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}